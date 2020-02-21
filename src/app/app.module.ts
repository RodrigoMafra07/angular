import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
