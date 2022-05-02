import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['9920497822', Validators.required],
      password: ['1133', Validators.required]
    })
  }

  get form(){
    return this.loginForm.controls;
  }

  Submit(){
    if (this.loginForm.controls['email'].value  === '9920497822' && this.loginForm.controls['password'].value === '1133') {
      this.router.navigate(['/dashboard']);
    }

  }

}
