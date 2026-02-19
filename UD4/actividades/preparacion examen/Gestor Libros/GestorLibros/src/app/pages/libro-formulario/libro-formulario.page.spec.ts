import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibroFormularioPage } from './libro-formulario.page';

describe('LibroFormularioPage', () => {
  let component: LibroFormularioPage;
  let fixture: ComponentFixture<LibroFormularioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
