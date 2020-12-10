import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}

  onAddWorker() {
    if (this.name === undefined || this.surname === undefined || this.name.trim() === '' || this.surname.trim() === '') {
      alert("FIll the inputs");
    } else {
      this.addWorker.emit({
        name: this.name,
        surname: this.surname,
        type: this.type,
      });
    }
  }
}
