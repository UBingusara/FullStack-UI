import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slah";
  singUpForm!: FormGroup;
  constructor(private fb : FormBuilder) {}

  ngOnInit(): void{
    this.singUpForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      userName:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
    })

  }
  hideShowPass(){
    this.isText =!this.isText;
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"

  }
}
