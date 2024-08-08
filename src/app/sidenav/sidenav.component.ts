import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  navItems = [
    { label: 'Daily Activity Tracker', icon: 'event_note' },
    { label: 'Menstrual Cycle Tracker', icon: 'calendar_today' },
    // Add other items here
  ];
  
}
