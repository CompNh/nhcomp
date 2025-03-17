import { ComboOption } from '../ComboBoxTypes';
import { ComboBoxAction } from './ComboBoxActionTypes';
interface ComboBoxState {
    isOpen: boolean;
    options: Array<ComboOption>;
    selectedItem?: ComboOption;
}
declare const initialComboBoxState: (options: Array<ComboOption>, selectedItem?: ComboOption) => ComboBoxState;
declare function reducerComboBox(state: ComboBoxState, action: ComboBoxAction): ComboBoxState;
export { reducerComboBox, initialComboBoxState };
export type { ComboBoxState };
//# sourceMappingURL=ComboBoxReducer.d.ts.map