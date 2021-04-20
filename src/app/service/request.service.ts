import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Request} from '../model/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  getRequest(query: string): Observable<Request> {
    const token = sessionStorage.getItem('token');
    if (token === null) {
      return throwError('Invalid token');
    } else {
      const httpParams = new HttpParams().append('q', query);
      return this.http.get<Request>(`http://localhost:8080/washapp/api/v1/requests?q=${query}`, {
        params: httpParams,
        headers: new HttpHeaders()
          .append('Authorization', `Bearer ${token}`)
      });
    }
  }

  getAllRequests(): Observable<Array<Request>> {
    const token = sessionStorage.getItem('token');
    if (token === null) {
      return throwError('Invalid token');
    } else {
      return this.http.get<Array<Request>>(`http://localhost:8080/api/v1/requests/all`, {
        headers: new HttpHeaders()
          .append('Authorization', `Bearer ${token}`)
      });
    }
  }
}
