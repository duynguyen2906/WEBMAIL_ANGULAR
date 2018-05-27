import { Injectable } from '@angular/core';
import { Email } from '../model/email'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailURL='http://localhost:3000/posts';

  constructor(private http: HttpClient){
    
  };
  getMovies(): Observable<Email[]> {
    return this.http.get<Email[]>(this.emailURL).pipe(
      tap(receivedEmail => console.log(`receivedEmail = ${JSON.stringify(receivedEmail)}`)),
      catchError(error => of([]))
    );
  }
}
