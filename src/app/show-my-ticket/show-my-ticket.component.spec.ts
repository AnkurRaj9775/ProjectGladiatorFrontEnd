import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyTicketComponent } from './show-my-ticket.component';

describe('ShowMyTicketComponent', () => {
  let component: ShowMyTicketComponent;
  let fixture: ComponentFixture<ShowMyTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMyTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
