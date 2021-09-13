import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CrudState } from './reducers/crud.reducer';
import * as CrudActions from './actions/crud.actions';
import { userQuery } from './selector/crud.selector';


@Injectable({
  providedIn: 'root'
})
export class UserFacade{

  getRegisteredUsersState$ = this.store.select(userQuery.getRegisteredUsers);
  getUnegisteredUsersState$ = this.store.select(userQuery.getUnregisteredUsers);
  getProjectRelationState$ = this.store.select(userQuery.getProjectRelations);
  getTotalUsersState$ = this.store.select(userQuery.getTotalUsers);

  constructor(private store: Store<CrudState>) { }

  dispatchGetUsers(): void {
    this.store.dispatch(CrudActions.getUsers());
  }
}
