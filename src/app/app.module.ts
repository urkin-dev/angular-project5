import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditformComponent } from './ui/editform/editform.component';

import { TextMaskModule } from 'angular2-text-mask';
import { WorkersFilterPipe } from './shared/pipes/workers-filter.pipe';

@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, EditformComponent, WorkersFilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TextMaskModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
