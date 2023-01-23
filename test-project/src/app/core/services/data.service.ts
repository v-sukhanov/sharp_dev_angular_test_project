import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginActionPayload, ISignUpActionPayload } from '../../store/auth/auth.models';
import { ISignUpResponse } from '../models/auth.model';


@Injectable({
	providedIn: 'root'
})
export class DataService {
	readonly baseApi = 'http://193.124.114.46:3001';

	constructor(
		private _httpClient: HttpClient
	) {
	}


	signUp(request: ISignUpActionPayload) {
		return this._httpClient.post<ISignUpResponse>(this.baseApi + '/users', request);
	}

	signIn(request: ILoginActionPayload) {
		return this._httpClient.post<ISignUpResponse>(this.baseApi + '/sessions/create', request);
	}
}