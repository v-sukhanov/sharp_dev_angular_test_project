import { ISignUpActionPayload } from '../auth/auth.models';
import { IUsersRequest } from './user.models';


export class LoadUserInfoAction {
	static readonly type = '[User] loadUserInfo';

	constructor() {
	}
}

