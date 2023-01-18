import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  public getRootMessage(): Observable<any> {
    return this.http.get(`${this.API_URL}/`);
  }

  public getHelloMessage(name: string): Observable<string> {
    return this.http.get<string>(`${this.API_URL}/greet/${name}`);
  }
}
