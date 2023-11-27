import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobFormComponent } from './add-job-form.component';

describe('AddJobFormComponent', () => {
  let component: AddJobFormComponent;
  let fixture: ComponentFixture<AddJobFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobFormComponent]
    });
    fixture = TestBed.createComponent(AddJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
