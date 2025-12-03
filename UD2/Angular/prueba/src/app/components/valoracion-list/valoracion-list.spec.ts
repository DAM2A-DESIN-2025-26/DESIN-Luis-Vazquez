import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionList } from './valoracion-list';

describe('ValoracionList', () => {
  let component: ValoracionList;
  let fixture: ComponentFixture<ValoracionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoracionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
