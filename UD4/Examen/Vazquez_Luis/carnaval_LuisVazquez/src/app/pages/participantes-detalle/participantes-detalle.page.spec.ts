import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantesDetallePage } from './participantes-detalle.page';

describe('ParticipantesDetallePage', () => {
  let component: ParticipantesDetallePage;
  let fixture: ComponentFixture<ParticipantesDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantesDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
