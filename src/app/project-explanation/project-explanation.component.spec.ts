import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExplanationComponent } from './project-explanation.component';

describe('ProjectExplanationComponent', () => {
  let component: ProjectExplanationComponent;
  let fixture: ComponentFixture<ProjectExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
