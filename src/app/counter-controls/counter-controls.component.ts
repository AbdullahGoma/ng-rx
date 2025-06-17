import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';
import { RippleDirective } from '../ripple.directive';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
  imports: [RippleDirective]
})
export class CounterControlsComponent {
  private intervalId: any;

  constructor(private store: Store) {}

  startIncrement(): void {
    this.store.dispatch(increment({ value: 1 })); // immediate first dispatch
    this.intervalId = setInterval(() => {
      this.store.dispatch(increment({ value: 1 }));
    }, 100); 
  }

  startDecrement(): void {
    this.store.dispatch(decrement({ value: 1 }));
    this.intervalId = setInterval(() => {
      this.store.dispatch(decrement({ value: 1 }));
    }, 100);
  }

  stopCounting(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
