import { Injectable } from '@angular/core';
import { Email} from '../model/email'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailURL='http://localhost:3000/posts';

  constructor(private http: HttpClient){
    
  };
  getMail(): Observable<Email[]> {
    return this.http.get<Email[]>(this.emailURL).pipe(
      tap(receivedEmail => console.log(`receivedEmail = ${JSON.stringify(receivedEmail)}`)),
      catchError(error => of([]))
    );
  };
  addEmail(newEmail:Email):Observable<Email>{
    return this.http.post<Email>(this.emailURL,newEmail,httpOptions).pipe(
      tap((email: Email) => console.log(`inserted movie = ${JSON.stringify(email)}`)),
      catchError(error => of(new Email()))
    );

  }

}
