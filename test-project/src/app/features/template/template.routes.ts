import { Routes } from '@angular/router';
import { TemplateComponent } from './template.component';


export const templateRoutes: Routes = [
	{
		path: '',
		component: TemplateComponent,
		children: [
			{
				path: 'transactions',
				loadComponent: () => import('../transactions/transactions.component').then(x => x.TransactionsComponent)
			},
			{
				path: 'newTransaction',
				loadComponent: () => import('../new-transaction/new-transaction.component').then(x => x.NewTransactionComponent)
			},
			{
				path: '**',
				redirectTo: 'newTransaction'
			}
		]
	}
];