import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserFacade } from 'src/app/store/user.facade';

import { RegisteredUsersComponent } from './registered-users.component';

describe('RegisteredUsersComponent', () => {
  let component: RegisteredUsersComponent;
  let fixture: ComponentFixture<RegisteredUsersComponent>;
  let userFacade: any;
  beforeEach(async () => {
    userFacade = {};
    await TestBed.configureTestingModule({
      declarations: [ RegisteredUsersComponent ],
      providers: [{provide: UserFacade, useValue: userFacade}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get registerd users data in Mat Table', () => {
    component.registeredUsersState$ = of([{"name": 'test'}]);
    component.getRegisteredUserDataMatTable()
    expect(component.dataSource2.data[0].name).toEqual('test');
  });
});
