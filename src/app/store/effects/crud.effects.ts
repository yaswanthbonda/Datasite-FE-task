import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as CrudActions from './../actions/crud.actions';
import { CrudService } from 'src/app/services/crud.service';



@Injectable()
export class CrudEffects {

  constructor(private action$: Actions, private http: HttpClient, private crudSer: CrudService) { }


  GetUsers$ = createEffect(() => this.action$.pipe(
    ofType(CrudActions.getUsers),
    switchMap(action => {
      return forkJoin([
        this.crudSer.getRegisteredUsers(),
        this.crudSer.getUnregisteredUsers(),
        this.crudSer.getProjectMemberShips()
      ]).pipe(map(result => {
        if (result && result.length === 3) {
          return CrudActions.getUsersSuccess({ data: result });
        } else {
          return CrudActions.getUsersFailure({ error: 'Error occured' });
        }
      }));
    }
    )
  ));
}
