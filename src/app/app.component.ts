import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'courses-web-platform';

  constructor(private authService: AuthService, private router: Router) {
    this.checkUser();
  }

  checkUser() {
    this.authService.getUser().subscribe({
      error: (e) => this.router.navigate(['/login']),
      complete: () => this.router.navigate(['/courses']),
    });
  }
}
