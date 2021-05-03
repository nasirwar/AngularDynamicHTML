import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTMLService {

  constructor(private http: HttpClient) { }
  getHTML(): Observable<string>
  {
    return of('<h1>Hello world!</h1>');
  }

  getHTMLFromServer(url: string): Observable<string>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain'
    });
    return this.http.get(url, {headers, responseType : 'text'});
  }
}
