import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CrudState } from '../reducers/crud.reducer';

const getUserState = createFeatureSelector<CrudState>('userState');

const getRegisteredUsers = createSelector(getUserState, ({ registeredUsers }) => registeredUsers);
const getUnregisteredUsers = createSelector(getUserState, ({ unregisteredUsers }) => unregisteredUsers);
const getProjectRelations = createSelector(getUserState, ({ projectRelations }) => projectRelations);
const getTotalUsers = createSelector(getUserState, ({ totalUsers }) => totalUsers);


export const userQuery = {
  getRegisteredUsers,
  getUnregisteredUsers,
  getProjectRelations,
  getTotalUsers
};
