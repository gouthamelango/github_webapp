import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarGraph } from './radar-graph';

describe('RadarGraph', () => {
  let component: RadarGraph;
  let fixture: ComponentFixture<RadarGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarGraph],
    }).compileComponents();

    fixture = TestBed.createComponent(RadarGraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
