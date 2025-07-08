import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
  encapsulation: ViewEncapsulation.None, // Use None to avoid styles being scoped
})
export class ControlsComponent {
  label = input.required<string>();
}
