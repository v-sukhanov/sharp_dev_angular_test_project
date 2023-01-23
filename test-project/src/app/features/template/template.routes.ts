import { Routes } from '@angular/router';
import { TemplateComponent } from './template.component';


export const templateRoutes: Routes = [
	{
		path: '',
		component: TemplateComponent,
		// children: [
		// 	{
		// 		path: 'signin',
		// 		component: SigninComponent
		// 	},
		// 	{
		// 		path: 'signup',
		// 		component: SignupComponent
		// 	},
		// 	{
		// 		path: '**',
		// 		redirectTo: 'signin'
		// 	}
		// ]
	}
];