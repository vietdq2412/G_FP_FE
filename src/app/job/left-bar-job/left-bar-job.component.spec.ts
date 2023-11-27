import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarJobComponent } from './left-bar-job.component';

describe('LeftSideBarComponent', () => {
  let component: LeftBarJobComponent;
  let fixture: ComponentFixture<LeftBarJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBarJobComponent]
    });
    fixture = TestBed.createComponent(LeftBarJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
