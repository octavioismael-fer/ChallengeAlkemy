import { TestBed } from '@angular/core/testing';

import { PlatosComidaService } from './platos-comida.service';

describe('PlatosComidaService', () => {
  let service: PlatosComidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatosComidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
