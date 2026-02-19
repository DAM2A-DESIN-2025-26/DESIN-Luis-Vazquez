import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibroListaPage } from './libro-lista.page';

describe('LibroListaPage', () => {
  let component: LibroListaPage;
  let fixture: ComponentFixture<LibroListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
