import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private readonly baseUrl = 'https://localhost:8080/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<EmployeeFromApi> {
    return this.http.get<EmployeeFromApi>(this.baseUrl);
  }

  deleteUser(idEmployee:number): Observable<EmployeeFromApi> {
    return this.http.delete<EmployeeFromApi>(this.baseUrl+ "delete/"+ idEmployee);
  } 


  
}
export interface EmployeeFromApi{
  employees:[{
    id: number,
    name: string, 
    phone: number, 
    officeNumber: number, 
    position: string,
    manager: string
  }]
}
