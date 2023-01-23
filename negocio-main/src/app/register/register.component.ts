import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileModel } from '../models/ProfileModel';
import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm!: FormGroup;
  

  registerForm = new FormGroup({
    email: new FormControl('prueba@mail.com'),
    password: new FormControl('123456'),
    first_name: new FormControl('prueba'),
    last_name: new FormControl('prueba1'),
    phone: new FormControl('123456'),
  });

  constructor(
    private readonly fb: FormBuilder,
    private sessionsService: SessionsService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  register(): void {
    this.sessionsService.register(this.registerForm.getRawValue() as ProfileModel)
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      last_name: ['', [Validators.required, Validators.minLength(5)]],
      first_name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
    })
  }


}
