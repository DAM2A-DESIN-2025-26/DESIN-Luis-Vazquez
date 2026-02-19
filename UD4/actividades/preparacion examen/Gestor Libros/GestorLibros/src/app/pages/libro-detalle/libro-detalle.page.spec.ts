import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibroDetallePage } from './libro-detalle.page';

describe('LibroDetallePage', () => {
  let component: LibroDetallePage;
  let fixture: ComponentFixture<LibroDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
