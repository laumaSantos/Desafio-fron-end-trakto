import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDesignsService {
  private readonly apiUrl = 'https://api.trakto.io';

  constructor(private http: HttpClient) { }

  ListarDesigns() {
    return this.http.get<any>
    (`${this.apiUrl}/document`);
  }
}
