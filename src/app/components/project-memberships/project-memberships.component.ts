import { Component, OnInit } from '@angular/core';
import { UserFacade } from 'src/app/store/user.facade';

@Component({
  selector: 'app-project-memberships',
  templateUrl: './project-memberships.component.html',
  styleUrls: ['./project-memberships.component.scss']
})
export class ProjectMembershipsComponent implements OnInit {

  projectRelationsState$ = this.userFacade.getProjectRelationState$;

  constructor(private userFacade: UserFacade) {
   }

  ngOnInit(): void {
  }

}
