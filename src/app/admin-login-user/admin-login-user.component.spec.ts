import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginUserComponent } from './admin-login-user.component';

describe('AdminLoginUserComponent', () => {
  let component: AdminLoginUserComponent;
  let fixture: ComponentFixture<AdminLoginUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
