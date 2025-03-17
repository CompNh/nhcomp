import { useReducer } from "react";
import { ComboOption } from "../ComboBoxTypes";
import { ComboBoxState, initialComboBoxState, reducerComboBox } from "./ComboBoxReducer";

export interface ComboBoxReducerReturn {
    state : ComboBoxState;      
    setOption : (options : Array<ComboOption>) => void;
    selectItem : (item : ComboOption) => void;
}

function useComboBoxReducer(options: Array<ComboOption>){
    const [state, dispatch] = useReducer(reducerComboBox, initialComboBoxState(options));

    const setOptions = (options : Array<ComboOption>) =>{
        dispatch({
            type:"SET_OPTIONS",
            options : options
        })
    }

    const selectItem = (item : ComboOption) =>{
        dispatch({
            type : "SELECT_ITEM",
            item : item,
            isOpen : false
        })
    }
 
    const setIsOpen = (isOpen: boolean) => {
        dispatch({
            type: "SET_IS_OPEN",
            isOpen : isOpen
        });
    };    

    return {
        state,
        setOptions,
        selectItem,
        setIsOpen
    }
}

export default useComboBoxReducer



