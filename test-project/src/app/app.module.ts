import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth/auth.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserState } from './store/user/user.state';
import { HttpHeaderInterceptor } from './core/interceptors/http-header.interceptor';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NgxsModule.forRoot([
			AuthState,
			UserState
		]),
		NgxsStoragePluginModule.forRoot({
			key: 'auth.token'
		})
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpHeaderInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
