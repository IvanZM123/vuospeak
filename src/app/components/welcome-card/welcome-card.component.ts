// Imports modules
import { Component, Input } from '@angular/core';

// Imports models
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent {
  @Input() user!: User;
}
