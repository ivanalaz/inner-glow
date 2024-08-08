import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }
}
