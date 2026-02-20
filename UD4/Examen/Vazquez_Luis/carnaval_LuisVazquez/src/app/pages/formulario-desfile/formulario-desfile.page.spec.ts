import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioDesfilePage } from './formulario-desfile.page';

describe('FormularioDesfilePage', () => {
  let component: FormularioDesfilePage;
  let fixture: ComponentFixture<FormularioDesfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDesfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
