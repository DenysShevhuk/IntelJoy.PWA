import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../shared/component/interface';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthServices {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  get token(): string {
    return '';
  }

  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKye}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;
    console.log(message);
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Невірний email');
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
        this.error$.next('Невірний пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Невірний email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Невірний пароль');
        break;
    }
    return throwError(error);
  }

  // tslint:disable-next-line:typedef
  private setToken() {
    console.log();
  }
}
