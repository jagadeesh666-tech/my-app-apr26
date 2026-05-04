import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsIdcardsComponent } from './students-idcards.component';

describe('StudentsIdcardsComponent', () => {
  let component: StudentsIdcardsComponent;
  let fixture: ComponentFixture<StudentsIdcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsIdcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsIdcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
