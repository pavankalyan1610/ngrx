import { ActionEx, DataActionTypes } from '../actions/data.actions';
export const initialState = [];
/**
 * function for monthly data reducer 
 */
export function MonthlyDataReducer(state = initialState, action: ActionEx) {
    switch (action.type) {
        case DataActionTypes.AddMonthlyData:
            return state.concat(action.payload);
        default:
            return state;
    }
}