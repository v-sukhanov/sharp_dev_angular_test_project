import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';

@Component({
	selector: 'app-auth',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		FlexModule
	],
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

}
