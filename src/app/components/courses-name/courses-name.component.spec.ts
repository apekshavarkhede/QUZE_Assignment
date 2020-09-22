import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNameComponent } from './courses-name.component';

describe('CoursesNameComponent', () => {
  let component: CoursesNameComponent;
  let fixture: ComponentFixture<CoursesNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
