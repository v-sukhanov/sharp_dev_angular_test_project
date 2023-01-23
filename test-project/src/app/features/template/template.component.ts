import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngxs/store';
import { LogoutAction } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-template',
  standalone: true,
	imports: [CommonModule, FlexModule, MatIconModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

	constructor(
		private _store: Store
	) {
	}

	logout() {
		this._store.dispatch(new LogoutAction());
	}
}
