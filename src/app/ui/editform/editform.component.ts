import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  type = 0;

  @Input() isVisible: boolean;
  @Output() saveWorker = new EventEmitter<MyWorker>();

  ngOnInit(): void {
  }

  onEditWorker() {
    this.saveWorker.emit({
      name: this.name,
      surname: this.surname,
      type: this.type
    });
  }

}
