import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  customValue: number;

  constructor(private store: Store<{counter: {count: number}}>) { }

  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }

  onCustomIncrement() {
    this.store.dispatch(customIncrement({value: this.customValue}))
  }
}
