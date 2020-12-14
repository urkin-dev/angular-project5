import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditformComponent } from './ui/editform/editform.component';

import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, EditformComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TextMaskModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
