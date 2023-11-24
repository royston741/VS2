import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/shared/model/Response';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.baseUserUrl;

  constructor(public http: HttpClient) {}

  addCustomer(userData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    password: string;
    address:string;
    userType:string
  }): Observable<Response> {
    return this.http.post<Response>(
      `${this.baseUrl}createCustomer`,
      userData
    );
  }

//   getCustomerById(id: number): Observable<Response> {
//     return this.http.get<Response>(`${this.baseUrl}getCustomerById/${id}`);
//   }

//   getAllCustomers(
//     pageNumber: number,
//     pageSize: number,
//     column: string,
//     direction: string,
//     value: string
//   ): Observable<Response> {
//     console.log(
//       `${this.baseUrl}getAllCustomers?page=${pageNumber}&&pageSize=${pageSize}&&column=${column}&&direction=${direction}&&value=${value}`
//     );
//     return this.http.get<Response>(
//       `${this.baseUrl}getAllCustomers?page=${pageNumber}&&pageSize=${pageSize}&&column=${column}&&direction=${direction}&&value=${value}`
//     );
//   }

//   updateCustomer(customerData: Customer): Observable<Response> {
//     return this.http.put<Response>(
//       `${this.baseUrl}updateCustomer`,
//       customerData
//     );
//   }
//   deleteCustomer(id: number) {
//     return this.http.delete<Response>(`${this.baseUrl}deleteCustomer/${id}`);
//   }

  logInUser(name: string, password: string): Observable<Response> {
    return this.http.get<Response>(
      `${this.baseUrl}logIn?name=${name}&&password=${password}`
    );
  }
}
