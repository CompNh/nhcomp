import { useReducer } from "react";
import { DropDownBoxOption } from "../DropDownBoxTypes";
import { DropDownBoxState, initialDropDownBoxState, reducerDropDownBox } from "./DropDownBoxReducer";

export interface DropDownBoxReducerReturn {
    state : DropDownBoxState;      
    setOption : (options : Array<DropDownBoxOption>) => void;
    selectItem : (item : DropDownBoxOption) => void;
}

function useDropDownBoxReducer(options: Array<DropDownBoxOption>, defaultKey? : string){
    const [state, dispatch] = useReducer(reducerDropDownBox, initialDropDownBoxState(options, defaultKey));

    const setOptions = (options : Array<DropDownBoxOption>) =>{
        dispatch({
            type:"SET_OPTIONS",
            options : options
        })
    }

    const selectItem = (item? : DropDownBoxOption) =>{
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

export default useDropDownBoxReducer



