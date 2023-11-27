import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLeftBarComponent } from './company-left-bar.component';

describe('CompanyLeftBarComponent', () => {
  let component: CompanyLeftBarComponent;
  let fixture: ComponentFixture<CompanyLeftBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyLeftBarComponent]
    });
    fixture = TestBed.createComponent(CompanyLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
