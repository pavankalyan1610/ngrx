import { ActionEx, DataActionTypes } from '../actions/data.actions';
export const initialState = [];
/**
 * function for annual data reducer 
 */
export function AnnualDataReducer(state = initialState, action: ActionEx) {
    switch (action.type) {
        case DataActionTypes.AddAnnualData:
            return state.concat(action.payload);
        default:
            return state;
    }
}
