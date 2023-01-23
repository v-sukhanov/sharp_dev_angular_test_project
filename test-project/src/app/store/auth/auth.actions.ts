import { ILoginActionPayload, ISignUpActionPayload } from './auth.models';


export class LoginAction {
	static readonly type = '[Auth] Login';

	constructor(public payload: ILoginActionPayload) {
	}
}

export class SignUpAction {
	static readonly type = '[Auth] SignUp';

	constructor(public payload: ISignUpActionPayload) {
	}
}


export class LogoutAction {
	static readonly type = '[Auth] Logout';
}