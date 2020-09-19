import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompletedJobsComponent } from './view-completed-jobs.component';

describe('ViewCompletedJobsComponent', () => {
  let component: ViewCompletedJobsComponent;
  let fixture: ComponentFixture<ViewCompletedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCompletedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompletedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
