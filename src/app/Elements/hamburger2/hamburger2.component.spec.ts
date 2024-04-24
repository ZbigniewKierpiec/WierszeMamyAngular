import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hamburger2Component } from './hamburger2.component';

describe('Hamburger2Component', () => {
  let component: Hamburger2Component;
  let fixture: ComponentFixture<Hamburger2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hamburger2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hamburger2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
