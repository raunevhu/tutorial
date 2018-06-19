import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { INTRODUCTIONComponent } from './introduction/introduction.component';
import { INSTALLATIONComponent } from './installation/installation.component';
import { TUTTORIALComponent } from './tuttorial/tuttorial.component';

@NgModule({
  declarations: [
    AppComponent,
    INTRODUCTIONComponent,
    INSTALLATIONComponent,
    TUTTORIALComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot([
        {path:'', component:INTRODUCTIONComponent},
        {path:'installation', component:INSTALLATIONComponent},
        {path:'tuttorial', component:TUTTORIALComponent},
      ])
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  