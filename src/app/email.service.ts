import { Injectable } from '@angular/core';
import {  Email, CreateEmail, IEmail} from '../model/email'
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
  private emailURL='http://localhost:3000/email';
  emails: Observable <any>; // dữ liệu bất đồng bộ

  constructor(private http: HttpClient){
    
  };
  getMail(): Observable<IEmail[]> {
    return this.http.get<IEmail[]>(this.emailURL).pipe(
      tap(receivedEmail => console.log(`receivedEmail = ${JSON.stringify(receivedEmail)}`)),
      catchError(error => of([]))
    );
  };
  addEmail(Subject: string, Mail : string, Name: string, Message: string) {
    
    return this.http.post<any>(this.emailURL, CreateEmail({
      id: null,
      name: Name,
      subject: Subject,
      message: Message,
      email: Mail
    })).subscribe(value => { this.emails = value; alert("SENDING EMAIL...") });

  };
  getData(): Observable<any>{
    return this.http.get<IEmail[]>(this.emailURL).pipe()
  };

}

