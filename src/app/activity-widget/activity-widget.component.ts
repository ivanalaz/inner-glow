import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-activity-widget',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './activity-widget.component.html',
  styleUrl: './activity-widget.component.scss'
})
export class ActivityWidgetComponent {

  title: string = "Title";
}
