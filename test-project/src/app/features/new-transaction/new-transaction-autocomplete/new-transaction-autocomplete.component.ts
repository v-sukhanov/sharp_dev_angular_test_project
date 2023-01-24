import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';
import { catchError, debounceTime, EMPTY, of, ReplaySubject, switchMap } from 'rxjs';
import { IUser } from '../../../store/user/user.models';

@Component({
	selector: 'app-new-transaction-autocomplete',
	standalone: true,
	imports: [CommonModule, MatInputModule, MatAutocompleteModule, FormsModule],
	templateUrl: './new-transaction-autocomplete.component.html',
	styleUrls: ['./new-transaction-autocomplete.component.scss']
})
export class NewTransactionAutocompleteComponent implements OnInit, OnDestroy {
	options: string[] = [];
	value = '';
	readonly valueChange$ = new ReplaySubject<string>(1);

	@Output() selectUser = new EventEmitter<string | null>();

	constructor(
		private _dataService: DataService
	) {
	}

	ngOnInit() {
		this.valueChange$
			.pipe(
				debounceTime(150),
				switchMap(value => {
					if (!value) {
						return of([]);
					}
					return this._dataService.getUsers({
						filter: value
					})
						.pipe(
							catchError(err => {
								console.log(err)
								return EMPTY;
							})
						)
				})
			)
			.subscribe((users) => {
				this.options = users.map(x => x.name);
			})

	}

	ngOnDestroy() {
		this.valueChange$.complete();
	}


	optionSelected(event: MatAutocompleteSelectedEvent) {
		this.selectUser.emit(event.option.value);
	}

	getValue(event: Event): string {
		return (event.target as HTMLInputElement).value;
	}
}
