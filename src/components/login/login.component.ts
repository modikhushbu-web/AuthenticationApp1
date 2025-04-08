
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: response => {
        console.log('Login successful!', response);
      },
      error: () => {
        this.errorMessage = 'Invalid credentials testing!';
      }
    });
  }
}


