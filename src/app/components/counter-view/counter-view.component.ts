import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.css']
})
export class CounterViewComponent implements OnInit{
  counter$: Observable<ICounterState>;

  constructor(private store: Store<{counter: ICounterState}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
