import { Component, OnInit } from '@angular/core';
import { UserFacade } from 'src/app/store/user.facade';

@Component({
  selector: 'app-unregistered-users',
  templateUrl: './unregistered-users.component.html',
  styleUrls: ['./unregistered-users.component.scss']
})
export class UnregisteredUsersComponent implements OnInit {
  unregisteredUsersState$ = this.userFacade.getUnegisteredUsersState$;


  constructor(private userFacade: UserFacade) { }

  ngOnInit(): void {
  }

}
