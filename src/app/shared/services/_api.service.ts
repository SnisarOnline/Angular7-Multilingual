import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  private apiUrl = 'api/';
  private httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: Http) {
    console.log('API SERVICE INIT');
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
          console.error('Full description of the BUG: ', error);

          if (error.message === undefined) {
              this.log(`${operation} ERROR : ${error.message} FAILED => Please check the connected plugins. Especially HTTP requests interceptors`);
          } else {
              this.log(`${operation} ERROR : ${error.message}`);
          }

          return of(result as T);
      };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
      console.info(`ApiService: ${message}`);
  }

  private getUrl(url, id = ''): string {
      if (id === '') {
          // return environment.apiUrl + url;
          return this.apiUrl + url;
      } else {
          // return environment.apiUrl + url + id + '/';
          return this.apiUrl + url + id + '/';
      }
  }


  /**

   * GET: all post
   * @param {string} url
   * @returns {Observable<any>}
   */
  list (url: string): Observable<any> {
    return this.httpClient.get (this.getUrl(url))
      .pipe(
        tap(_ => this.log('GET ALL POST')),
        catchError(this.handleError('list', []))
      );
  }

  /**
   * GET: one post
   * @param url
   * @param id
   * @returns {Observable<any>}
   */
  retrieve (url: string, id: string): Observable<any> {
    return this.httpClient.get (this.getUrl(url, id))
      .pipe(
        tap(_ => this.log('GET ONE POST')),
        catchError(this.handleError('retrieve', []))
      );
  }

  /**
   * POST: Sent request
   * @param {string} url
   * @param data
   * @returns {Observable<any>}
   */
  create (url: string, data: any): Observable<any> {
    return this.httpClient.post (this.getUrl(url), data, this.httpOptions)
      .pipe(
        tap(_ => this.log('SENT REQUEST')),
        catchError(this.handleError('create', []))
      );
  }

  /**
   * PATCH: Partial resource changes.
   * @param url
   * @param data
   * @param id
   * @returns {Observable<any>}
   */
  edit (url: string, data: any, id: string): Observable<any> {
    return this.httpClient.patch( this.getUrl(url, id), data, this.httpOptions )
      .pipe(
        tap(_ => this.log('CHANGES REQUEST')),
        catchError(this.handleError('edit', []))
      );
  }

  /**
   * PUT: Complete replacement of the resource.
   * @param {string} url
   * @param data
   * @param {string} id
   * @returns {Observable<any>}
   */
  rewrite (url: string, data: any, id: string): Observable<any> {
    return this.httpClient.put( this.getUrl(url, id), data, this.httpOptions )
      .pipe(
        tap(_ => this.log('CHANGES REQUEST')),
        catchError(this.handleError('rewrite', []))
      );
  }

  /**
   * Delete request
   * @param url
   * @param id
   * @returns {Observable<any>}
   */
  remove (url: string, id: string): Observable<any> {
    return this.httpClient.delete( this.getUrl(url, id), this.httpOptions )
      .pipe(
        tap(_ => this.log('DELL REQUEST')),
        catchError(this.handleError('remove', []))
      );
  }

}
