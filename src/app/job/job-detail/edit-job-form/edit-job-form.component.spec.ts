import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobFormComponent } from './edit-job-form.component';

describe('EditJobFormComponent', () => {
  let component: EditJobFormComponent;
  let fixture: ComponentFixture<EditJobFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJobFormComponent]
    });
    fixture = TestBed.createComponent(EditJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
