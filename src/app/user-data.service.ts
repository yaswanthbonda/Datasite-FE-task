import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getRegisteredUserData(): Observable<any> {
    const url = 'https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers';
    return this.http.get<any>(url)
  }

  getUnregisteredUserData(): Observable<any> {
    const url = 'https://5c3ce12c29429300143fe570.mockapi.io/api/unregisteredusers';
    return this.http.get<any>(url)
  }

  getProjectMembershipData(): Observable<any> {
    const url = 'https://5c3ce12c29429300143fe570.mockapi.io/api/projectmemberships';
    return this.http.get<any>(url)
  }
  
}
