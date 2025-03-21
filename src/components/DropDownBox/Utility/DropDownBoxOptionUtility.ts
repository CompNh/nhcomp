import { DropDownBoxOption } from "../DropDownBoxTypes"

const DefualtOptionAtive = (option : Array<DropDownBoxOption>, isActiveAll? : boolean ) : Array<DropDownBoxOption> => {
    let newOptions : Array<DropDownBoxOption> = [];
    if(isActiveAll === true)
        newOptions = [{key : 'all', value : 'ALL'}, ...option];
    else
        newOptions = option;

    return newOptions;        
}

const TranlateLanguage = (value : string, onTranslate?: (item : string) => string) =>{
    if(onTranslate === undefined){
        return value
    }else {
        return onTranslate(value);
    }
}

export {DefualtOptionAtive, TranlateLanguage}