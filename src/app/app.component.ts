import { Component, OnInit } from '@angular/core';
import { UserFacade } from './store/user.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showControls= {
    showRegistered: false,
    showUnregistered: false,
    showProjects: false,
    showTotal: false
  }

  constructor(private userFacade: UserFacade) { }

  ngOnInit() {
    this.userFacade.dispatchGetUsers();
  }

}
