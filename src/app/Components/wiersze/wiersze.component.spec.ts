import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WierszeComponent } from './wiersze.component';

describe('WierszeComponent', () => {
  let component: WierszeComponent;
  let fixture: ComponentFixture<WierszeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WierszeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WierszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
