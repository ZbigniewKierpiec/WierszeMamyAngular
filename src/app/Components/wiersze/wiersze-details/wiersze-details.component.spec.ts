import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WierszeDetailsComponent } from './wiersze-details.component';

describe('WierszeDetailsComponent', () => {
  let component: WierszeDetailsComponent;
  let fixture: ComponentFixture<WierszeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WierszeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WierszeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
