import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrewComponent } from './prew.component';

describe('PrewComponent', () => {
  let component: PrewComponent;
  let fixture: ComponentFixture<PrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
