import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrjComponent } from './login-prj.component';

describe('LoginPrjComponent', () => {
  let component: LoginPrjComponent;
  let fixture: ComponentFixture<LoginPrjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPrjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
