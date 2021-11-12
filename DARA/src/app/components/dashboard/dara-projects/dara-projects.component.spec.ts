import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaraProjectsComponent } from './dara-projects.component';

describe('DaraProjectsComponent', () => {
  let component: DaraProjectsComponent;
  let fixture: ComponentFixture<DaraProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaraProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaraProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
