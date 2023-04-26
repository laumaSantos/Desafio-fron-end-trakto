import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://api.trakto.io/auth/signin';

  constructor(private http: HttpClient) { }

  LoginUser(objeto: any) {
    return this.http.post<any>
    (`${this.apiUrl}/CriarTokenIdentity/`, objeto);
  }
}


