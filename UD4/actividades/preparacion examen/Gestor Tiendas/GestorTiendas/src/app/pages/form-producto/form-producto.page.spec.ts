import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormProductoPage } from './form-producto.page';

describe('FormProductoPage', () => {
  let component: FormProductoPage;
  let fixture: ComponentFixture<FormProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
