import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrianguloPage } from './triangulo.page';

describe('TrianguloPage', () => {
  let component: TrianguloPage;
  let fixture: ComponentFixture<TrianguloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrianguloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
