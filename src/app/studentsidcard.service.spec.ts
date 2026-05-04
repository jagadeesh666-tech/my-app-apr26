import { TestBed } from '@angular/core/testing';

import { StudentsidcardService } from './studentsidcard.service';

describe('StudentsidcardService', () => {
  let service: StudentsidcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsidcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
