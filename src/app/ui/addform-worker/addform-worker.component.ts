import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  phone: string;
  phonemask = [7, ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  type = 0;
  addform: FormGroup;
  disabledForms = false;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {
    this.addform = new FormGroup({
      firstName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      lastName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      phone: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
        Validators.pattern(/7 \(\d\d\d\) \d\d\d\-\d\d\-\d\d/g)
      ]),
      type: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required
      ])
    });
  }

  onAddWorker() {
    this.addWorker.emit({
      name: this.name,
      surname: this.surname,
      type: this.type,
      phone: this.phone
    });
  }
}
