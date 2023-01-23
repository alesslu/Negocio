import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUri: string = "https://expensable-api.herokuapp.com/"

  constructor(private http: HttpClient) {}
  
    register(register: any): Observable<any> {
      return this.http.post(`${this.apiUri}/register`, register);
}
}
