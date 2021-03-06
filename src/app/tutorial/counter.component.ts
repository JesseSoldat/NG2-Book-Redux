import {
  Component,
  Inject
} from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app-store';
import { AppState } from './app-state';
import * as CounterActions from './counter-actions-creater';

@Component({
	selector: 'counter',
	templateUrl: './counter.component.html'
})

export class CounterComponent {
	counter: number;

 constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState(){
  	let state: AppState = this.store.getState() as AppState;
  	this.counter = state.counter;
  }

	increment(){
		this.store.dispatch(CounterActions.increment());
	}
	decrement(){
		this.store.dispatch(CounterActions.decrement());
	}
}