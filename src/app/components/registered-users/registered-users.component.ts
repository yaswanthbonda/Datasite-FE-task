import { Component, OnInit } from '@angular/core';
import { UserFacade } from 'src/app/store/user.facade';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  registeredUsersState$ = this.userFacade.getRegisteredUsersState$;

  showRegisteredMatTable = false;
  registeredUsers: Array<any> = [];
  dataSource2!: MatTableDataSource<any>;
  displayedColumns=['id', 'firstName', 'lastName', 'company', 'phone', 'emailAddress', 'city', 'languageCode', 'disclaimerAccepted'];

  constructor(private userFacade: UserFacade) {}

  ngOnInit(): void {
  }

  getRegisteredUserDataMatTable() {
    this.showRegisteredMatTable = !this.showRegisteredMatTable;
    // console.log('showRegisteredMatTable:', this.showRegisteredMatTable);
    this.registeredUsersState$.subscribe((data) => {
      // console.log('testing', data);
      this.dataSource2 = new MatTableDataSource(data);
    });
  }

}
