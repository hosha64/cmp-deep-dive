import { Component } from '@angular/core';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TicketsComponent,
    TrafficComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cmp-deep-dive';
}
