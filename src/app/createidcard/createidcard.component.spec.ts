import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateidcardComponent } from './createidcard.component';

describe('CreateidcardComponent', () => {
  let component: CreateidcardComponent;
  let fixture: ComponentFixture<CreateidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateidcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
