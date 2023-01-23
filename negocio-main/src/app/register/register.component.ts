import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from '../models/register.interface';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contactForm!: FormGroup;
  registro: Register[] = []
  
  constructor(public userService: UserService, private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  register(): void {
    console.log('Form ->', this.contactForm.value)
    this.registro = this.contactForm.value;
    this.userService.register(this.register).subscribe(data => {
      console.log(data);
    });
  }

  initForm(): FormGroup{
    return this.fb.group({
      email:['', [Validators.required]],
      password:['',[Validators.required]],
      last_name:['',[Validators.required],Validators.minLength(5)],
      first_name:['',[Validators.required],Validators.minLength(5)],
      phone:['',[Validators.required],Validators.minLength(9)],
    })
  }


}
