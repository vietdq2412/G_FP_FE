import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCVFormComponent } from './apply-cv-form.component';

describe('ApplyCVFormComponent', () => {
  let component: ApplyCVFormComponent;
  let fixture: ComponentFixture<ApplyCVFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyCVFormComponent]
    });
    fixture = TestBed.createComponent(ApplyCVFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
