import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInputComponent } from '../shared/auth-input/auth-input.component';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { LoginAction, SignUpAction } from '../../../store/auth/auth.actions';
import { catchError, EMPTY } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signin',
  standalone: true,
	imports: [CommonModule, AuthInputComponent, MatButtonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
	signInForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.min(8), Validators.pattern(/[a-zA-Z0-9]/)]),
	});
	error?: string;

	constructor(
		private _store: Store,
		private _router: Router,
	) {
	}

	ngOnInit() {

	}


	onSignIn() {
		const { email, password } = this.signInForm.controls;
		if (!email.value || !password.value) {
			return;
		}
		this._store.dispatch(new LoginAction({
			email: email.value,
			password: password.value,
		}))
			.pipe(
				catchError(err => {
					this.error = err.error;
					return EMPTY;
				})
			)
			.subscribe()
	}
}
