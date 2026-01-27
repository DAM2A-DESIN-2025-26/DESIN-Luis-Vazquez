import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalamarPage } from './calamar.page';

describe('CalamarPage', () => {
  let component: CalamarPage;
  let fixture: ComponentFixture<CalamarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalamarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
