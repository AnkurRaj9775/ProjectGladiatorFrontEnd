import { TestBed } from '@angular/core/testing';

import { LastMonthRecordAndProfitService } from './service/last-month-record-and-profit.service';

describe('LastMonthRecordAndProfitService', () => {
  let service: LastMonthRecordAndProfitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastMonthRecordAndProfitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
