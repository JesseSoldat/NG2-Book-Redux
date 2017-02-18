import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MinimalReduxComponent } from './tutorial/minimal_redux.component';

import { AppStore } from './tutorial/app_store';
import { AppState } from './tutorial/app_state';


@NgModule({
  declarations: [
    AppComponent,
    MinimalReduxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
