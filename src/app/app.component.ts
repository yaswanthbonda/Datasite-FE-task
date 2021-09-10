import { Component, ViewChild } from '@angular/core';
import { UserDataService } from './user-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registeredUsers: Array<any> = [];
  unregisteredUsers: Array<any> = [];
  projectMemberships: Array<any> = [];
  dataSource!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;
  dataSource3!: MatTableDataSource<any>;
  title = 'datasite-front-end-task';
  displayedColumns=['id', 'firstName', 'lastName', 'emailAddress'];
  displayedColumns2=['id', 'emailAddress', 'registrationId'];
  displayedColumns3=['id', 'projectId', 'userId'];

  constructor(private UserDataService:UserDataService){}

  getRegisteredUserDataFromAPI() {
    this.UserDataService.getRegisteredUserData().subscribe((data) => {
      console.log(data);
      this.registeredUsers = data;
      this.dataSource = new MatTableDataSource(this.registeredUsers);
    });
  }

  getUnregisteredUserDataFromAPI(){
    this.UserDataService.getUnregisteredUserData().subscribe((data) => {
      console.log(data);
      this.unregisteredUsers = data;
      this.dataSource2 = new MatTableDataSource(this.unregisteredUsers);
    });
  }

  getProjectMembershipDataFromAPI(){
    this.UserDataService.getProjectMembershipData().subscribe((data) => {
      console.log(data);
      this.projectMemberships = data;
      this.dataSource3 = new MatTableDataSource(this.projectMemberships);
    });
  }
}
