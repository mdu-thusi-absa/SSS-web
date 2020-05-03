import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTasksComponent } from './entity-tasks.component';

describe('EntityTasksComponent', () => {
  let component: EntityTasksComponent;
  let fixture: ComponentFixture<EntityTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
