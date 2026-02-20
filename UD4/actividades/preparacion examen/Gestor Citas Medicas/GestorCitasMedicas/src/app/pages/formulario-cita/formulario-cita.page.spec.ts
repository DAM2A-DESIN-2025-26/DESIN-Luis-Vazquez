import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioCitaPage } from './formulario-cita.page';

describe('FormularioCitaPage', () => {
  let component: FormularioCitaPage;
  let fixture: ComponentFixture<FormularioCitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
