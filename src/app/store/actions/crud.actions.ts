import { createAction, props } from '@ngrx/store';

const GET_USERS_IN_SYSTEM = 'GET_USERS_IN_SYSTEM';
const GET_USERS_IN_SYSTEM_SUCCESS = 'GET_USERS_IN_SYSTEM_SUCCESS';
const GET_USERS_IN_SYSTEM_FAILURE = 'GET_USERS_IN_SYSTEM_FAILURE';


export const getUsers = createAction(
  GET_USERS_IN_SYSTEM
);

export const getUsersSuccess = createAction(
  GET_USERS_IN_SYSTEM_SUCCESS,
  props<{ data: any[] }>()
);

export const getUsersFailure = createAction(
  GET_USERS_IN_SYSTEM_FAILURE,
  props<{ error: any }>()
);

