import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {User} from '../model/User';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  updateUser(id: number, firstName: string, latName: string, nic: string, userType: string, mobile: string, username: string, password: string): Observable<User> {
    const token = sessionStorage.getItem('token');
    const uname = sessionStorage.getItem('uname') as string;

    if (token === null || uname === null) {
      return throwError('Invalid username or token');
    }
    const user = new User(id, firstName, latName, nic, userType, mobile, username, password);
    return this.http.put<User>(`http://localhost:8080/washapp/api/v1/users`, user, {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    });
  }

  getUser(query: string): Observable<User> {
    const token = sessionStorage.getItem('token');
    if (token === null) {
      return throwError('Invalid token');
    } else {
      const httpParams = new HttpParams().append('q', query);
      return this.http.get<User>(`http://localhost:8080/washapp/api/v1/users?q=${query}`, {
        params: httpParams,
        headers: new HttpHeaders()
          .append('Authorization', `Bearer ${token}`)
      });
    }
  }

  authenticate(username: string, password: string): Observable<any> {
    const user = new User(null, '', '', '', 'ADMIN', '', username, password);
    return this.http.post(`http://localhost:8080/api/v1/users/authenticate`, user, {
      responseType: 'text'
    });
  }

  saveUser(firstName: string, latName: string, nic: string, userType: string, mobile: string, username: string, password: string): Observable<User> {
    const token = sessionStorage.getItem('token');
    const uname = sessionStorage.getItem('username') as string;
    console.log(token);
    console.log(uname);

    if (token === null || uname === null) {
      return throwError('Invalid username or token');
    }
    const user = new User(null, firstName, latName, nic, userType, mobile, username, password);
    console.log(user);
    return this.http.post<User>(`http://localhost:8080/api/v1/users`, user, {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    });
  }

  getAllUsers(): Observable<Array<User>> {
    const token = sessionStorage.getItem('token');
    if (token === null) {
      return throwError('Invalid token');
    } else {
      return this.http.get<Array<User>>(`http://localhost:8080/api/v1/users/all`, {
        headers: new HttpHeaders()
          .append('Authorization', `Bearer ${token}`)
      });
    }
  }
}
