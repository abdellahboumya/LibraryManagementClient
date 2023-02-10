import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  ngOnInit(): void {

  }

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  authenticate() {
    this.authService.authenticate(this.email.value as string, this.password.value as string).subscribe();
  }

  demo() {
    this.authService.demo().subscribe(result => {
      console.log(result);
    });
  }
}
