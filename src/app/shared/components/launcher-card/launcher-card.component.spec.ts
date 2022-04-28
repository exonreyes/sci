import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LauncherCardComponent} from './launcher-card.component';

describe('LauncherCardComponent', () => {
  let component: LauncherCardComponent;
  let fixture: ComponentFixture<LauncherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LauncherCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
