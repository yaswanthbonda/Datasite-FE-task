import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getRegisteredUsers = () => this.http.get(API_URLS.GET_REGISTERED_USERS);
  getUnregisteredUsers = () => this.http.get(API_URLS.GET_UNREGISTERED_USERS);
  getProjectMemberShips = () => this.http.get(API_URLS.GET_PROJECT_RELATIONSHIPS);

}
