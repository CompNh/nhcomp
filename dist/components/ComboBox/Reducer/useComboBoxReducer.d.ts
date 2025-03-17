import { ComboOption } from '../ComboBoxTypes';
import { ComboBoxState } from './ComboBoxReducer';
export interface ComboBoxReducerReturn {
    state: ComboBoxState;
    setOption: (options: Array<ComboOption>) => void;
    selectItem: (item: ComboOption) => void;
}
declare function useComboBoxReducer(options: Array<ComboOption>): {
    state: ComboBoxState;
    setOptions: (options: Array<ComboOption>) => void;
    selectItem: (item: ComboOption) => void;
    setIsOpen: (isOpen: boolean) => void;
};
export default useComboBoxReducer;
//# sourceMappingURL=useComboBoxReducer.d.ts.map