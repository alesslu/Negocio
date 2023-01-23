import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileModel } from '../models/ProfileModel';
import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profile: ProfileModel = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    phone: '',
  };

  constructor(
    private router: Router,
    private sessionService: SessionsService,
  ){}

  ngOnInit(): void {
    this.sessionService.getProfile().subscribe((res: any) => {
      this.profile = res;
    });
  }

  logOut() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login']);
  }
}
