import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoDetallePage } from './juego-detalle.page';

describe('JuegoDetallePage', () => {
  let component: JuegoDetallePage;
  let fixture: ComponentFixture<JuegoDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
