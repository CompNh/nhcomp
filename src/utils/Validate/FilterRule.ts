const filterNumber = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    const allowed = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
    if (!/^[0-9]$/.test(e.key) && !allowed.includes(e.key)) {
      e.preventDefault();
    }
}

export {filterNumber}