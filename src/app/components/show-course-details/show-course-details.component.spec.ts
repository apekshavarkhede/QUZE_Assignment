import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCourseDetailsComponent } from './show-course-details.component';

describe('ShowCourseDetailsComponent', () => {
  let component: ShowCourseDetailsComponent;
  let fixture: ComponentFixture<ShowCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
