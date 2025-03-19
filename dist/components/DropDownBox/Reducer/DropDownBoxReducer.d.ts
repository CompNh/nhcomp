import { DropDownBoxOption } from '../DropDownBoxTypes';
import { DropDownBoxAction } from './DropDownBoxActionTypes';
interface DropDownBoxState {
    isOpen: boolean;
    options: Array<DropDownBoxOption>;
    selectedItem?: DropDownBoxOption;
}
declare const initialDropDownBoxState: (options: Array<DropDownBoxOption>, defaultKey?: string) => DropDownBoxState;
declare function reducerDropDownBox(state: DropDownBoxState, action: DropDownBoxAction): DropDownBoxState;
export { reducerDropDownBox, initialDropDownBoxState };
export type { DropDownBoxState };
//# sourceMappingURL=DropDownBoxReducer.d.ts.map