import { ComboOption } from "../ComboBoxTypes"
import { ComboBoxAction } from "./ComboBoxActionTypes"

interface ComboBoxState {
    isOpen : boolean
    options : Array<ComboOption>
    selectedItem? : ComboOption
}

const initialComboBoxState = (options: Array<ComboOption>, selectedItem? : ComboOption) : ComboBoxState =>{
    return {
        isOpen : false,
        options: options,
        selectedItem : selectedItem
    }
}

function reducerComboBox(state : ComboBoxState, action : ComboBoxAction) : ComboBoxState{
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

export {reducerComboBox, initialComboBoxState}
export type {ComboBoxState}
