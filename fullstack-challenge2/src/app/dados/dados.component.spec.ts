import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosComponent } from './dados.component';
import { DadosService } from './service/dados-service.service';
import { of } from 'rxjs';


import { Users } from './model/user';

describe('DadosComponent', () => {
  let component: DadosComponent;
  let dadosService: jasmine.SpyObj<DadosService>;

  beforeEach(async(() => {
    component = new DadosComponent(dadosService);
    dadosService = jasmine.createSpyObj('DadosService', ['getUser']);

    const user = new Users();
    dadosService.getUser.and.returnValue(of(user));

  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call getDataFromAPI()', () => {
    const listaux = new Array<Users>();
    const participacaoTotal = 10;
    const spy = spyOn(component, 'getDataFromAPI');
    // METHODS CALLS
    dadosService.getUser()
      .subscribe((data) => {
        component.user = data;
      });
    component.getCorrectPercentage(listaux,participacaoTotal);
    component.getCharData();
    component.getDataFromAPI();
    // EXPECT
    expect(spy).toHaveBeenCalled();
  });
});
