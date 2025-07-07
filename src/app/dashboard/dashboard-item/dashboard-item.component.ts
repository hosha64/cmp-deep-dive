import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss',
})
export class DashboardItemComponent {
  image = input<{ url: string; alt: string }>(); // Path to the image
  title = input<string>(); // Title of the dashboard item
}
