import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesfilesPage } from './desfiles.page';

describe('DesfilesPage', () => {
  let component: DesfilesPage;
  let fixture: ComponentFixture<DesfilesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
