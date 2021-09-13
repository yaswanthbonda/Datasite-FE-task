import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFacade } from 'src/app/store/user.facade';

import { UnregisteredUsersComponent } from './unregistered-users.component';

describe('UnregisteredUsersComponent', () => {
  let component: UnregisteredUsersComponent;
  let fixture: ComponentFixture<UnregisteredUsersComponent>;
  let userFacade: any;
  beforeEach(async () => {
    userFacade = {};
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredUsersComponent ],
      providers: [{provide: UserFacade, useValue: userFacade}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
