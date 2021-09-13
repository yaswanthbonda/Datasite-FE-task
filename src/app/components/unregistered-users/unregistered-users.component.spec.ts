import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredUsersComponent } from './unregistered-users.component';

describe('UnregisteredUsersComponent', () => {
  let component: UnregisteredUsersComponent;
  let fixture: ComponentFixture<UnregisteredUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredUsersComponent ]
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
