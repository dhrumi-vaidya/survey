import { Component } from '@angular/core';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private service: AuthserviceService) {}
  FormFieldType = '';
  role: string = '';
  loginDetails: [] = [];
  formsubmitted = false;
  userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  onsubmit(userForm: FormGroup) {
    console.log(userForm.value);
    console.log(userForm.valid);
    if (userForm.valid) {
      this.formsubmitted = true;
      console.log('Form submitted successfully');

      if (
        userForm.value.email === 'dvtheta@gmail.com' &&
        userForm.value.password === '123Abc'
      ) {
        this.role = 'admin';
        this.service.login(
          userForm.value.username,
          userForm.value.email,
          userForm.value.password,
          this.role
        );
        console.log('Admin component');
        this.router.navigate(['admin']);
      } else {
        this.role = 'user';
        this.service.login(
          userForm.value.username,
          userForm.value.email,
          userForm.value.password,
          this.role
        );
        console.log('User component');
        this.router.navigate(['customers']);
      }
      // if (userForm.value.role === 'admin') {
      //   console.log('Admin component');
      //   this.router.navigate(['admin']);
      // } else if (userForm.value.role === 'user') {
      //   console.log('User component');
      //   this.router.navigate(['customers']);
      // }
    } else {
      console.log('Form submission failed');
    }
  }
}
