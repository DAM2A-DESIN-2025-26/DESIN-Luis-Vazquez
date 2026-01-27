import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CirculoPage } from './circulo.page';

describe('CirculoPage', () => {
  let component: CirculoPage;
  let fixture: ComponentFixture<CirculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
