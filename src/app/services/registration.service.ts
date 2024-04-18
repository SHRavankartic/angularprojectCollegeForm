import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private serv: HttpClient) {

  }
  addFormData(data: any): Observable<any> {
    return this.serv.post('http://localhost:3000/registrationformdata', data);
  }

  updateFormData(id: string,  data: any): Observable<any> {
    return this.serv.put(`http://localhost:3000/registrationformdata/`+id+'', data);
  }

  getFormData(): Observable<any> {
    return this.serv.get('http://localhost:3000/registrationformdata');
  }

  deleteFormData(id: string): Observable<any>{
    return this.serv.delete('http://localhost:3000/registrationformdata/'+id+'');
  }
}
