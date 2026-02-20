import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisfracesPage } from './disfraces.page';

describe('DisfracesPage', () => {
  let component: DisfracesPage;
  let fixture: ComponentFixture<DisfracesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisfracesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
