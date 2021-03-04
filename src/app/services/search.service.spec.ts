import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('SearchService', () => {
  let httpTestingController: HttpTestingController;
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SearchService);
  });
  describe('#getProtucts', () => {
    it('should be created', () => {
      service.getProtucts('cola').subscribe((res) => expect(res).toBeTruthy);
    });
  });
});
