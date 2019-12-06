import { Action } from '@ngrx/store';

export enum DataActionTypes {
    AddAnnualData = 'AddAnnual',
    AddMonthlyData = 'AddMonthly',
}

export class ActionEx implements Action {
    readonly type;
    constructor(public payload: any) { }
}

/**
 *defining action for adding annual data
 */
export class AddAnnualData implements Action {
    readonly type = DataActionTypes.AddAnnualData
    constructor(public payload: any) { }
}
/**
 * defining action for adding monthly data
 */

export class AddMonthlyData implements Action {
    readonly type = DataActionTypes.AddMonthlyData
    constructor(public payload: any) { }
}
