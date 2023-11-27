import { TestBed } from '@angular/core/testing';

import { FileUpLoadService } from './file-up-load.service';

describe('FileUpLoadServiceService', () => {
  let service: FileUpLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUpLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
