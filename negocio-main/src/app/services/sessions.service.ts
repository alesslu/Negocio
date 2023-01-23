import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileModel } from '../models/ProfileModel';

interface User {
  email: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private apiUri: string = "https://expensable-api.herokuapp.com";

  user?: User | null;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    this.http.post(`${this.apiUri}/login`, { email, password })
      .subscribe((data: any) => {
        if (data.token) {
          sessionStorage.setItem("token", data.token);
          this.router.navigate(["/home/categories"]);
        }
      });
  }

  logOut(): void {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  isLogged(): boolean {
    if (sessionStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  register(user: ProfileModel): void{
    this.http.post<ProfileModel>(`${this.apiUri}/signup`, user).subscribe(
      (data: any) => {
         if (data.token) {
            alert("Registro correcto");
            sessionStorage.setItem("token", data.token);
            this.router.navigate(["/home/categories"]);
         }
      },
      (err) => {
         alert("Usuario existente");
      }
   );
  }

  getProfile() {
    return this.http.get(`${this.apiUri}/profile`);
 }

}
