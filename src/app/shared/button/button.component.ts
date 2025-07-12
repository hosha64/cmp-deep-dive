import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    class: 'button',
    '(click)': 'onClick($event)',
  },
})
export class ButtonComponent {
  label: string = 'Click Me';

  onClick(event: Event): void {
    event.preventDefault();
    console.log('Button clicked:', this.label);
  }
}
