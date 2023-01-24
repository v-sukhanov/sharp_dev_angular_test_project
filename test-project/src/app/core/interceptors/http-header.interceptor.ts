import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '../../store/auth/auth.state';


@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor{

	constructor(private _store: Store) {
	}

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this._store.selectSnapshot(AuthState.token);

		if (token) {
			/**
			 * req является immutable - т.е. неизменным, чтобы модифицировать запрос,
			 * создаём копию запроса, которая уже будет модифицирована.
			 * Подставляем заголовок авторизации.
			 */
			const cloned = req.clone({
				headers: req.headers.set('Authorization', 'Bearer ' + token)
			});

			return next.handle(cloned);
		}

		return next.handle(req);
	}
}