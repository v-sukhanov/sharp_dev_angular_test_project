import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Select, Selector, Store } from '@ngxs/store';
import { LogoutAction } from '../../store/auth/auth.actions';
import { RouterOutlet } from '@angular/router';
import { LoadUserInfoAction } from '../../store/user/user.actions';
import { UserState } from '../../store/user/user.state';
import { IUserInfoResponse } from '../../store/user/user.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-template',
  standalone: true,
	imports: [CommonModule, FlexModule, MatIconModule, RouterOutlet],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit{
	@Select(UserState.userInfo) userInfo$!: Observable<IUserInfoResponse>;

	constructor(
		private _store: Store
	) {
	}

	ngOnInit() {
		this._store.dispatch(new LoadUserInfoAction());
	}

	logout() {
		this._store.dispatch(new LogoutAction());
	}
}
