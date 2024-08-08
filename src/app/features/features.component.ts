import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features = [
    {
      icon: 'daily-activity',
      title: 'Daily Activity Tracker',
      description: 'Keep track of your daily tasks and habits to improve productivity.'
    },
    {
      icon: 'menstrual-cycle',
      title: 'Menstrual Cycle Tracker',
      description: 'Monitor your menstrual cycle and get insights into your health.'
    },
    {
      icon: 'goal-setting',
      title: 'Goal Setting',
      description: 'Set and track your personal and professional goals for success.'
    }
  ];
}