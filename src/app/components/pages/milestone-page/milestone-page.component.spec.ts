import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonePageComponent } from './milestone-page.component';

describe('MilestonePageComponent', () => {
  let component: MilestonePageComponent;
  let fixture: ComponentFixture<MilestonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
