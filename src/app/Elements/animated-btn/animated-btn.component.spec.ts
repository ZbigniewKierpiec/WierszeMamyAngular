import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBtnComponent } from './animated-btn.component';

describe('AnimatedBtnComponent', () => {
  let component: AnimatedBtnComponent;
  let fixture: ComponentFixture<AnimatedBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
