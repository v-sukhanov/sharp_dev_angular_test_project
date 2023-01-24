import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { IUserInfoResponse } from './user.models';
import { LoginAction } from '../auth/auth.actions';
import { tap } from 'rxjs';
import { IAuthStateModel } from '../auth/auth.state';
import { LoadUserInfoAction } from './user.actions';
import { DataService } from '../../core/services/data.service';


export interface IUserStateModel {
	info: IUserInfoResponse | null;
}


@State<IUserStateModel>({
	name: 'user',
	defaults: {
		info: null
	}
})
@Injectable()
export class UserState {
	@Selector()
	static userInfo(state: IUserStateModel): IUserInfoResponse | null {
		return state.info;
	}

	@Selector()
	static userInfoBalance(state: IUserStateModel): number {
		return parseFloat(state.info?.balance ?? '')  ?? 0;
	}

	constructor(
		private _dataService: DataService
	) {
	}


	@Action(LoadUserInfoAction)
	getUserInfo(ctx: StateContext<IUserStateModel>) {
		return this._dataService.getUserInfo()
			.pipe(
				tap((info) => {
					ctx.patchState({
						info
					});
				})
			)
	}


}