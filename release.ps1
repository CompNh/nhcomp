# ✅ Force UTF-8 Encoding
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding
$OutputEncoding = [System.Text.Encoding]::UTF8
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
chcp 65001  # ✅ Change to UTF-8 code page

# Get the current version
$CurrentVersion = $(npm pkg get version) -replace '"', ''
Write-Output "📌 Current version: $CurrentVersion"

# Ask the user for the version update type
Write-Output "🔹 Select the version update type:"
Write-Output "   1) Patch (e.g., $CurrentVersion → X.Y.Z+1)"
Write-Output "   2) Minor (e.g., $CurrentVersion → X.Y+1.0)"
Write-Output "   3) Major (e.g., $CurrentVersion → X+1.0.0)"
$VersionChoice = Read-Host "Enter the number (1/2/3)"

# Determine the version type based on user input
switch ($VersionChoice) {
    "1" { $NpmVersionType = "patch" }
    "2" { $NpmVersionType = "minor" }
    "3" { $NpmVersionType = "major" }
    default { 
        Write-Output "❌ Invalid input. Defaulting to Patch update."
        $NpmVersionType = "patch"
    }
}

# Ask the user for commit messages
$SourceCommitMessage = Read-Host "📝 Enter commit message for source code"
if (-not $SourceCommitMessage) { $SourceCommitMessage = "Fix: Code update" }

$BuildCommitMessage = Read-Host "📝 Enter commit message for build files"
if (-not $BuildCommitMessage) { $BuildCommitMessage = "Chore: Add build files" }

# Git commit and build process
Write-Output "🔹 Committing source code changes..."
git add .
git commit -m "$SourceCommitMessage"

Write-Output "🚀 Running build..."
npm run build
$buildResult = npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Output "❌ Build failed! Exiting..."
    exit 1
}

Write-Output "🔹 Committing build files..."
git add -f dist
git commit -m "$BuildCommitMessage"

Write-Output "🔹 Selected version update type: $NpmVersionType"
npm version $NpmVersionType

Write-Output "📡 Pushing to remote repository..."
git push origin release
git push origin --tags

Write-Output "✅ Deployment complete!"
