import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Route, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../../store/auth/auth.state';


@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private store: Store, private _router: Router) {
	}

	canActivate() {
		const isAuthenticated = this.store.selectSnapshot(AuthState.token);
		if (isAuthenticated) {
			return true;
		}
		return this._router.parseUrl('auth')
	}
}