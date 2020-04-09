import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Coord {
  latitude:string;
  longitude:string;
  altitude:string;
}

export interface User {
	coord:Coord;
	contacts;
	_id:string;
	telnumber:string;
	hashnumber:string;
	cni:string;
	deviceid:string;
	debutsejour:Date;
	finsejour:Date;
	etat:string;
	description:string;
	computed:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  BASE_URL='https://sncontact.herokuapp.com/users/';
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  getUsers(debut,fin): Observable<User> {
        return this.http.get<User>(this.BASE_URL+'all')
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
  }
  getUser(numero,debut,fin,checked): Observable<User> {
    return this.http.get<User>(this.BASE_URL+numero +'/'+debut+'/'+fin+'/'+checked)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// Error handling
errorHandl(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}   

}
