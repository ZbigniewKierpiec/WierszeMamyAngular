import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattbuttoneffectComponent } from './mattbuttoneffect.component';

describe('MattbuttoneffectComponent', () => {
  let component: MattbuttoneffectComponent;
  let fixture: ComponentFixture<MattbuttoneffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattbuttoneffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattbuttoneffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
