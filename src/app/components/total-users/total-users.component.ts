import { Component, OnInit } from '@angular/core';
import { UserFacade } from 'src/app/store/user.facade';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.scss']
})
export class TotalUsersComponent implements OnInit {
  totalUsersState$ = this.userFacade.getTotalUsersState$;


  constructor(private userFacade: UserFacade) {}

  ngOnInit(): void {
  }

}
