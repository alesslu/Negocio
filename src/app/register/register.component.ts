import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
      name:['', [Validators.required, Validators.minLength(5)]],
      checkAdult:['', [Validators.required]],
      departament:[''],
      comment:['', [Validators.required]],
    })
  }


  // Cambiar esto------------------------------------>
  
    changeRouteLoginToHome() {
      if (this.contactForm.value.email == 'test2@mail.com' && this.contactForm.value.password == '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['home']);
      } else {
        alert("Error, debes llenar los campos requeridos");
      }
    }
    
    changeRouteRegisterToHome() {
      this.router.navigate(['login']);
    }
  }



