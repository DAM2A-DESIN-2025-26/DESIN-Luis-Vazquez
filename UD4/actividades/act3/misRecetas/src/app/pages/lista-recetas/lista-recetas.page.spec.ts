import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaRecetasPage } from './lista-recetas.page';

describe('ListaRecetasPage', () => {
  let component: ListaRecetasPage;
  let fixture: ComponentFixture<ListaRecetasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
