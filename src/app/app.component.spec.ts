import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { UserFacade } from './store/user.facade';

describe('AppComponent', () => {
  let userFacade: any = jasmine.createSpyObj('UserFacade', [ 'dispatchGetUsers' ]);
  userFacade.dispatchGetUsers.and.returnValue(of({}))
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: UserFacade, useValue: userFacade}]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngNgrx'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(userFacade.dispatchGetUsers).toHaveBeenCalledTimes(1);
  });

});
