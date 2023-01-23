import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


export const authRoutes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: 'signin',
				component: SigninComponent
			},
			{
				path: 'signup',
				component: SignupComponent
			},
			{
				path: '**',
				redirectTo: 'signin'
			}
		]
	}
];