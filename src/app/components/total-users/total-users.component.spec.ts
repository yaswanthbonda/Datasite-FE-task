import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFacade } from 'src/app/store/user.facade';

import { TotalUsersComponent } from './total-users.component';

describe('TotalUsersComponent', () => {
  let component: TotalUsersComponent;
  let fixture: ComponentFixture<TotalUsersComponent>;
  let userFacade: any;
  beforeEach(async () => {
    userFacade = {};
    await TestBed.configureTestingModule({
      declarations: [ TotalUsersComponent ],
      providers: [{provide: UserFacade, useValue: userFacade}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
