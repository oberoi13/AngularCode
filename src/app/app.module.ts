import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OberoikiSharedComponent } from './oberoiki-shared/oberoiki-shared.component';


@NgModule({
  declarations: [
    AppComponent,
    OberoikiSharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
