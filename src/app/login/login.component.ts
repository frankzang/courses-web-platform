import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('student@email.com', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('12345678', {
      validators: [Validators.required],
    }),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    if (!email || !password) return;

    this.authService.doLogin(email, password).subscribe({
      error: (e) => console.error(e),
      complete: () => this.router.navigate(['/courses']),
    });
  }
}
