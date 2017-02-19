import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { createStore, Store, StoreEnhancer } from 'redux';

import { AppComponent } from './app.component';
import { CounterComponent } from './tutorial/counter.component';

import { AppStore } from './tutorial/app-store';
import { AppState } from './tutorial/app-state';

import { counterReducer } from './tutorial/counter-reducer';

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

 let store: Store<AppState> = createStore<AppState>(
 	counterReducer,
 	devtools
 );

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  	{provide: AppStore, useValue: store }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }