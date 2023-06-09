import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiUrl = 'https://api.trakto.io';

  constructor(private http: HttpClient) { }

  LoginUser(objeto: any) {
    return this.http.post<any>
    (`${this.apiUrl}/auth/signin`, objeto);
  }
}


