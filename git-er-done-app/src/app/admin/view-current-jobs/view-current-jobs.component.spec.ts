import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentJobsComponent } from './view-current-jobs.component';

describe('ViewCurrentJobsComponent', () => {
  let component: ViewCurrentJobsComponent;
  let fixture: ComponentFixture<ViewCurrentJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCurrentJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrentJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
