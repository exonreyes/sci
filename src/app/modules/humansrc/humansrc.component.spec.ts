import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HumansrcComponent} from './humansrc.component';

describe('HumansrcComponent', () => {
  let component: HumansrcComponent;
  let fixture: ComponentFixture<HumansrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumansrcComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumansrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
