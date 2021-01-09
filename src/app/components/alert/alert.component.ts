// Import modules
import { Component, Input } from '@angular/core';

// Import >> models <<
import { IAlertComponent } from "./models/alert.model";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Input() alert!: IAlertComponent;
}
