import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbuswithoutdriverComponent } from './bookbuswithoutdriver.component';

describe('BookbuswithoutdriverComponent', () => {
  let component: BookbuswithoutdriverComponent;
  let fixture: ComponentFixture<BookbuswithoutdriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookbuswithoutdriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbuswithoutdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
