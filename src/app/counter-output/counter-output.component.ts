import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe],
  animations: [
    trigger('counterChange', [
      transition('* => *', [
        style({ transform: 'scale(1.1)', color: 'var(--primary)' }),
        animate(
          '200ms ease-out',
          style({ transform: 'scale(1)', color: 'var(--primary-light)' })
        ),
      ]),
    ]),
  ],
})
export class CounterOutputComponent implements OnDestroy {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  pulse = false;
  changed = false;
  private countSubscription: Subscription;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);

    this.countSubscription = this.count$.subscribe(() => {
      this.pulse = true;
      this.changed = true;
      setTimeout(() => {
        this.pulse = false;
        this.changed = false;
      }, 200);
    });
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }
}
