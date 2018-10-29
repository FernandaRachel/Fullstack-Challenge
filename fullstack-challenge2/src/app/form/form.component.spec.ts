import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { DadosService } from '../dados/service/dados-service.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let formBuilder: jasmine.SpyObj<FormBuilder>;
  let userService: jasmine.SpyObj<DadosService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ]
    })
    formBuilder = jasmine.createSpyObj("FormBuilder", ["group"]);
    userService = jasmine.createSpyObj("DadosService", ["postUser"]);

    component = new FormComponent(formBuilder, userService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
