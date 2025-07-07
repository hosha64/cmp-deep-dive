import { Component } from '@angular/core';
import { NewTicketsComponent } from './new-tickets/new-tickets.component';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketsComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {}
