import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuadradoPage } from './cuadrado.page';

describe('CuadradoPage', () => {
  let component: CuadradoPage;
  let fixture: ComponentFixture<CuadradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
