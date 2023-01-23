import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@Component({
	selector: 'app-auth-input',
	standalone: true,
	imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
	templateUrl: './auth-input.component.html',
	styleUrls: ['./auth-input.component.scss']
})
export class AuthInputComponent {
	@Input() label?: string;
	@Input() type: 'text' | 'password' = 'text';
	@Input() control!: FormControl<null | string>;

	hide = true;

	constructor() {
	}
}
