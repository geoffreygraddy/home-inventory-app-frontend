import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeInventoryListComponent } from './home-inventory-list/home-inventory-list.component';
import { HomeInventoryFormComponent } from './home-inventory-form/home-inventory-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeInventoryListComponent,
    HomeInventoryFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
