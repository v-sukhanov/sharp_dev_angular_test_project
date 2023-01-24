import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import {  LoginAction, LogoutAction, SignUpAction } from './auth.actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';


export interface IAuthStateModel {
	token: string | null;
}


@State<IAuthStateModel>({
	name: 'auth',
	defaults: {
		token: null
	}
})
@Injectable()
export class AuthState {
	@Selector()
	static token(state: IAuthStateModel): string | null {
		return state.token;
	}


	constructor(
		private _authService: AuthService,
		private _router: Router
	) {}



	@Action(LoginAction)
	login(ctx: StateContext<IAuthStateModel>, action: LoginAction) {
		return this._authService.signIn(action.payload)
			.pipe(
				tap((response) => {
					ctx.patchState({
						token: response.id_token,
					});
					this._router.navigate(['/main'])
				})
			)
	}

	@Action(SignUpAction)
	signUp(ctx: StateContext<IAuthStateModel>, action: SignUpAction) {
		return this._authService.signUp(action.payload)
			.pipe(
				tap((response) => {
					ctx.patchState({
						token: response.id_token,
					});
					this._router.navigate(['/main'])
				})
			)
	}

	@Action(LogoutAction)
	logout(ctx: StateContext<IAuthStateModel>) {
		ctx.patchState({
			token: null,
		});
		this._router.navigate(['auth'])
	}


}