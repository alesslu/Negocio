import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
      name:['', [Validators.required, Validators.minLength(5)]],
      checkAdult:['', [Validators.required]],
      departament:[''],
      comment:['', [Validators.required]],
    })
  }


}
