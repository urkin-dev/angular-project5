import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkersService {

  routeApi = 'http://localhost:3000/workers';
  myWorkersDatabase: MyWorker[];

  constructor(private http: HttpClient) { }

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(worker: MyWorker) {
      return this.http.post(this.routeApi, worker).toPromise();
  }

  updateWorkers(worker: MyWorker, id: number) {
    return this.http.put(this.routeApi + `/${id}`, worker).toPromise();
  }

  deleteWorker(id: number) {
    return this.http.delete(this.routeApi + `/${id}`).toPromise();
  }
}
