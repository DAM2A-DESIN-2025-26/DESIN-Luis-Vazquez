import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesAdd } from './personajes-add';

describe('PersonajesAdd', () => {
  let component: PersonajesAdd;
  let fixture: ComponentFixture<PersonajesAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
