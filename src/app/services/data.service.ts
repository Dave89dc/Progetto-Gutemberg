import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { Root } from '../models/root';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gutembergURL = 'https://gutendex.com/books/?page=';

  constructor(private http: HttpClient) { }

  getAllBooks(page: number): Observable<Root>{
    return this.http.get<any>(this.gutembergURL + page).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Errore nella richiesta:', error);
        return throwError(() => createHttpError(error.status, 'Errore nella richiesta'));
      })
    );
  }

}

function createHttpError(arg0: number, arg1: string) {
  throw new Error('Function not implemented.');
}

