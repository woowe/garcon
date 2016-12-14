/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FloorsService } from './floors.service';

describe('FloorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FloorsService]
    });
  });

  it('should ...', inject([FloorsService], (service: FloorsService) => {
    expect(service).toBeTruthy();
  }));
});
