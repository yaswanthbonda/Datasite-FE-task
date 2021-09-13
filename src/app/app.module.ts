import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { CrudReducer } from './store/reducers/crud.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CrudEffects } from './store/effects/crud.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { UnregisteredUsersComponent } from './components/unregistered-users/unregistered-users.component';
import { ProjectMembershipsComponent } from './components/project-memberships/project-memberships.component';
import { TotalUsersComponent } from './components/total-users/total-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    RegisteredUsersComponent,
    UnregisteredUsersComponent,
    ProjectMembershipsComponent,
    TotalUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({userState:CrudReducer},{runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}}),
    EffectsModule.forRoot([CrudEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
