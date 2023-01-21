import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  contactForm!: FormGroup;
  constructor(private readonly fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value)
  }

  initForm(): FormGroup{
    return this.fb.group({
      email:['', [Validators.required]],
      password:['',[Validators.required]],

    })
  }

  changeRouteLoginToHome() {
    if (this.contactForm.value.email == 'test2@mail.com' && this.contactForm.value.password == '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['home']);
    } else {
      alert("Error, crendeciales invalidas");
    }
  }
  
  changeRouteRegisterToHome() {
    this.router.navigate(['register']);
  }
}
