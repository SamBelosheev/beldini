import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivelComponent } from './survivel.component';

describe('SurvivelComponent', () => {
  let component: SurvivelComponent;
  let fixture: ComponentFixture<SurvivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurvivelComponent]
    });
    fixture = TestBed.createComponent(SurvivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
