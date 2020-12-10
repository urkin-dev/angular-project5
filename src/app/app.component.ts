// TODO: Make form validation
// TODO: Add store and make it reactive
import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;
  editformStatus: boolean = false;
  editWorkerId: number;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    const index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onEdditListener(worker) {
    this.editformStatus === false ? this.editformStatus = true : this.editformStatus = false;
    if (this.editformStatus === false) {
      this.workers[this.editWorkerId].name = worker.name;
      this.workers[this.editWorkerId].surname = worker.surname;
      this.workers[this.editWorkerId].type = worker.type;
    } else {
      this.editWorkerId = this.workers.findIndex((w) => w.id === worker.id); // ID of current editing employe
    }
  }

  onAddWorker(worker) {
    const id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    this.workers.push(worker);
  }
}
