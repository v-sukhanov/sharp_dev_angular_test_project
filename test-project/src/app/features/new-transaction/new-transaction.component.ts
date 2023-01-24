import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	NewTransactionAutocompleteComponent
} from './new-transaction-autocomplete/new-transaction-autocomplete.component';
import { Observable, ReplaySubject } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { Select } from '@ngxs/store';
import { UserState } from '../../store/user/user.state';
import { IUserInfoResponse } from '../../store/user/user.models';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-transaction',
  standalone: true,
	imports: [CommonModule, NewTransactionAutocompleteComponent, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent {
	readonly selectedUser$ = new ReplaySubject<string | null>(1);
	@Select(UserState.userInfoBalance) balance$!: Observable<number>;
	value = 0;
	constructor() {
	}



	createTransaction() {

	}



}
