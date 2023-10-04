import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterMainComponent } from './components/counter-main/counter-main.component';
import { CounterViewComponent } from './components/counter-view/counter-view.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { counterReducer } from './components/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterMainComponent,
    CounterViewComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
