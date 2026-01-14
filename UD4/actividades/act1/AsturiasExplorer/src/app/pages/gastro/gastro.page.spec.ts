import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastroPage } from './gastro.page';

describe('GastroPage', () => {
  let component: GastroPage;
  let fixture: ComponentFixture<GastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
