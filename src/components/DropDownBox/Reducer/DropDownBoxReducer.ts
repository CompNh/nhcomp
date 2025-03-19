import { DropDownBoxOption } from "../DropDownBoxTypes"
import { DropDownBoxAction } from "./DropDownBoxActionTypes"

interface DropDownBoxState {
    isOpen : boolean
    options : Array<DropDownBoxOption>
    selectedItem? : DropDownBoxOption
}

const initialDropDownBoxState = (options: Array<DropDownBoxOption>, defaultKey? : string) : DropDownBoxState =>{
    return {
        isOpen : false,
        options: options,
        selectedItem : options.find((t)=>t.key ===defaultKey)
    }
}

function reducerDropDownBox(state : DropDownBoxState, action : DropDownBoxAction) : DropDownBoxState{
    switch (action.type) {
        case "SET_OPTIONS":            
            {
                return {
                    ...state,
                    options : action.options                 
                }
            }
        case "SET_IS_OPEN":        
        {
            return {
                ...state,
                isOpen : action.isOpen
            }
        }                       
        case "SELECT_ITEM":        
        {
            return {
                ...state,
                selectedItem : action.item,
                isOpen : action.isOpen                             
            }
        }        
        default:
            return state
    }
}

export {reducerDropDownBox, initialDropDownBoxState}
export type {DropDownBoxState}
