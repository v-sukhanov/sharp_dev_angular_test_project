import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./features/template/template.routes').then(x => x.templateRoutes),
		canActivate: [AuthGuard]
	},
	{
		path: 'auth',
		loadChildren: () => import('./features/auth/auth.routes').then(x => x.authRoutes)
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
