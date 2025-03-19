import { DropDownBoxOption } from '../DropDownBoxTypes';
import { DropDownBoxState } from './DropDownBoxReducer';
export interface DropDownBoxReducerReturn {
    state: DropDownBoxState;
    setOption: (options: Array<DropDownBoxOption>) => void;
    selectItem: (item: DropDownBoxOption) => void;
}
declare function useDropDownBoxReducer(options: Array<DropDownBoxOption>, defaultKey?: string): {
    state: DropDownBoxState;
    setOptions: (options: Array<DropDownBoxOption>) => void;
    selectItem: (item: DropDownBoxOption) => void;
    setIsOpen: (isOpen: boolean) => void;
};
export default useDropDownBoxReducer;
//# sourceMappingURL=useDropDownBoxReducer.d.ts.map