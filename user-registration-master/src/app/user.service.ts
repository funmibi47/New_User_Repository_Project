import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:8080/api/v1/save';

  constructor(private httpClient: HttpClient) { }

  createUser(user: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }
}
