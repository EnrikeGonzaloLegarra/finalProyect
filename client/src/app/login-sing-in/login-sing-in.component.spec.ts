import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSingInComponent } from './login-sing-in.component';

describe('LoginSingInComponent', () => {
  let component: LoginSingInComponent;
  let fixture: ComponentFixture<LoginSingInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSingInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
