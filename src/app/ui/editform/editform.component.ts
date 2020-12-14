import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyWorkerType, MyWorker } from 'app/shared/worker.model';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  phone: string;
  type = 0;
  phonemask = [7, ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  editform: FormGroup;
  disabledForms = false;

  @Input() isVisible: boolean;
  @Output() saveWorker = new EventEmitter<MyWorker>();

  ngOnInit(): void {
    this.editform = new FormGroup({
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

  onEditWorker() {
    this.saveWorker.emit({
      name: this.name,
      surname: this.surname,
      type: this.type,
      phone: this.phone
    });
  }

}
