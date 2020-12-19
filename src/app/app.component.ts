// TODO: Add store and make it reactive
import { Component, OnInit } from '@angular/core';
import { HttpWorkersService } from './shared/services/http-workers.service';
import {
  MyWorker,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;
  editformStatus = false;
  editWorkerId: number;
  searchStr = '';

  constructor(
    private httpWorkersService: HttpWorkersService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  async onDeleteById(id: number) {
    const index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
      await this.httpWorkersService.deleteWorker(id);
    }
  }

  async onEdditListener(worker) {
    this.editformStatus === false ? this.editformStatus = true : this.editformStatus = false;
    if (this.editformStatus === false) {
      worker.id = this.editWorkerId;
      this.workers[this.editWorkerId].name = worker.name;
      this.workers[this.editWorkerId].surname = worker.surname;
      this.workers[this.editWorkerId].type = worker.type;
      await this.httpWorkersService.updateWorkers(worker, this.editWorkerId);
    } else {
      this.editWorkerId = this.workers.findIndex((w) => w.id === worker.id); // ID of current editing employe
    }
  }

  async onAddWorker(worker) {
    const id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    this.workers.push(worker);
    await this.httpWorkersService.postWorker(worker);
  }

  async getData() {
    try {
      this.workers = await this.httpWorkersService.getWorkers();
    } catch (e) {
      console.log(e);
    }
  }
}
