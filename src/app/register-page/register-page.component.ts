import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup;
  hide = true;

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  register() {
    this.authService.register(
      this.form.get('email')?.value,
      this.form.get('password')?.value,
      this.form.get('firstname')?.value,
      this.form.get('lastname')?.value,).subscribe();
  }

  logout(){
    this.authService.logout().subscribe();
  }

}
