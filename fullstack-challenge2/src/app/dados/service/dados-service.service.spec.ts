import { TestBed, inject } from '@angular/core/testing';

import { DadosService } from './dados-service.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('DadosService', () => {
  let service: DadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:
      [
          DadosService
      ]
    });

    service = TestBed.get(DadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call getUser()", () => {
    const url = "http://teste"
    service.getUser();
    expect(service.getUser).toBeTruthy();
  });

  it("should call postUser()", () => {
    const user = {
      name: 'Teste',
      fullName: 'Full',
      participacao: 'Teste'
    }
    service.postUser(user);
    expect(service.getUser).toBeTruthy();
  });
});
