import { Action, createReducer, on } from '@ngrx/store';
import * as CrudActions from './../actions/crud.actions';

export interface CrudState {
  registeredUsers: any[];
  unregisteredUsers: any[];
  projectRelations: any[];
  totalUsers: any[];
}

export const initialState: CrudState = {
  registeredUsers: [],
  unregisteredUsers: [],
  projectRelations: [],
  totalUsers: []
};


const reducer = createReducer(
  initialState,

  on(CrudActions.getUsers, (state: any) =>
    state
  ),
  on(CrudActions.getUsersSuccess, (state: any, { data }) => {
    return ({ ...state, registeredUsers: data[0], unregisteredUsers: data[1], projectRelations: data[2], totalUsers: getTotalUsers(data) });
  }
  ),
  on(CrudActions.getUsersFailure, (state: any, error: any) =>
    ({ ...state, ...initialState })
  ),
);

function getTotalUsers(data: any): any[] {
  const [registered, unregistered, projects] = data;
  let users = [...registered, ...unregistered];
  return users.map(user => {
    user = { ...user };
    user['projectIds'] = projects.filter((elm: any) => elm.userId === user.id).map((elm: any) => elm.projectId);
    return user;
  });
}

export function CrudReducer(state: CrudState | undefined, action: Action) {
  return reducer(state, action);
}

