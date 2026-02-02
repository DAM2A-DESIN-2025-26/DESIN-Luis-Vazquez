import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaFormPage } from './receta-form.page';

describe('RecetaFormPage', () => {
  let component: RecetaFormPage;
  let fixture: ComponentFixture<RecetaFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
