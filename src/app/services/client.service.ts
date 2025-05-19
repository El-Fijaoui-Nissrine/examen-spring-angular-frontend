import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from "rxjs";
import {Client } from '../model/Client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

   constructor(private http: HttpClient) { }
   public getClients() :Observable<Array<Client>>{
     return this.http.get<Array<Client>>("http://localhost:8082/clients")
     }

     public saveClient(clients :Client):Observable<Client>{
       return this.http.post<Client>("http://localhost:8082/clients",clients)
       }
      public deleteCustomer(id :number){
           return this.http.delete("http://localhost:8082/clients/" +id)
           }
}
