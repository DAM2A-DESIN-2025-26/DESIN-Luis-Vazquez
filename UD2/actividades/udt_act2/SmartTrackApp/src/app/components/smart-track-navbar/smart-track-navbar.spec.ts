import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTrackNavbar } from './smart-track-navbar';

describe('SmartTrackNavbar', () => {
  let component: SmartTrackNavbar;
  let fixture: ComponentFixture<SmartTrackNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartTrackNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTrackNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
