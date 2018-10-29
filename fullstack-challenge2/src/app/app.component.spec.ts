import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';
import { FormComponent } from './form/form.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { DadosService } from './dados/service/dados-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent;;

  beforeEach(() => {
    component = new AppComponent();
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        NavBarComponent,
        FormComponent,
        DadosComponent,
        AppComponent
      ],
      providers: [
        DadosService,
        HttpClientModule
      ]
    });
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render app-dados', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-dados")).toBeDefined();
  }));

  it('should render app-form', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-form")).toBeDefined();
  }));
});
