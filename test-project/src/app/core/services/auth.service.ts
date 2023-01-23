import { Injectable } from '@angular/core';
import { ILoginActionPayload, ISignUpActionPayload } from '../../store/auth/auth.models';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private _dataService: DataService
	) {
	}


	signUp(data: ISignUpActionPayload) {
		return this._dataService.signUp(data);
	}

	signIn(data: ILoginActionPayload) {
		return this._dataService.signIn(data);
	}
}