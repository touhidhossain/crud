import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private  serverAddress = 'http://192.168.0.100:8080';

  constructor(private httpClient: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this.httpClient.post(this.serverAddress + '/employee', data);
  }

  updateEmployee(data: any): Observable<any> {
    return this.httpClient.post(this.serverAddress + '/employee', data);
  }

  getEmployeeList(): Observable<any> {
    return this.httpClient.get(this.serverAddress + '/employee');
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(this.serverAddress + `/employee/${id}`);
  }

}
