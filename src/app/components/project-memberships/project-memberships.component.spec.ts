import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFacade } from 'src/app/store/user.facade';

import { ProjectMembershipsComponent } from './project-memberships.component';

describe('ProjectMembershipsComponent', () => {
  let component: ProjectMembershipsComponent;
  let fixture: ComponentFixture<ProjectMembershipsComponent>;
  let userFacade: any;
  beforeEach(async () => {
    userFacade = {};
    await TestBed.configureTestingModule({
      declarations: [ ProjectMembershipsComponent ],
      providers: [{provide: UserFacade, useValue: userFacade}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
