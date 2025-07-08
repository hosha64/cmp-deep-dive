import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlsComponent } from '../../../shared/controls/controls.component';

@Component({
  selector: 'app-new-tickets',
  imports: [ButtonComponent, ControlsComponent],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.scss',
})
export class NewTicketsComponent {}
