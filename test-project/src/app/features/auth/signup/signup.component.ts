import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { AuthInputComponent } from '../shared/auth-input/auth-input.component';
import { MatButtonModule } from '@angular/material/button';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators
} from '@angular/forms';
import { Actions, ofActionDispatched, ofActionErrored, Store } from '@ngxs/store';
import { SignUpAction } from '../../../store/auth/auth.actions';
import { catchError, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	standalone: true,
	imports: [CommonModule, MatInputModule, AuthInputComponent, MatButtonModule, ReactiveFormsModule],
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	signUpForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		name: new FormControl('', [Validators.required, Validators.min(2), Validators.pattern(/^([^0-9]*)$/)]),
		password: new FormControl('', [Validators.required, Validators.min(8), Validators.pattern(/[a-zA-Z0-9]/)]),
		confirmPassword: new FormControl('', [Validators.required, (group: AbstractControl): ValidationErrors | null => {
			let pass = this.signUpForm?.get('password')?.value;
			let confirmPass = this.signUpForm?.get('confirmPassword')?.value
			return pass === confirmPass ? null : { notSame: true }
		}]),
	});
	error?: string;

	constructor(
		private _store: Store,
		private _router: Router,
	) {
	}

	ngOnInit() {

	}


	onSignUp() {
		const { email, name, password } = this.signUpForm.controls;
		if (!email.value || !name.value || !password.value) {
			return;
		}
		this._store.dispatch(new SignUpAction({
			email: email.value,
			username: name.value,
			password: password.value,
		}))
			.pipe(
				catchError(err => {
					this.error = err.error;
					return EMPTY;
				})
			)
			.subscribe(data => {
			})
	}
}
