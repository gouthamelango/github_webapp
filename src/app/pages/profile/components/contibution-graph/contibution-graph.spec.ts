import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContibutionGraph } from './contibution-graph';

describe('ContibutionGraph', () => {
  let component: ContibutionGraph;
  let fixture: ComponentFixture<ContibutionGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContibutionGraph],
    }).compileComponents();

    fixture = TestBed.createComponent(ContibutionGraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
