import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  contactForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

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

}
