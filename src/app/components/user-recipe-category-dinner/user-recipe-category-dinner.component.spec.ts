import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipeCategoryDinnerComponent } from './user-recipe-category-dinner.component';

describe('UserRecipeCategoryDinnerComponent', () => {
  let component: UserRecipeCategoryDinnerComponent;
  let fixture: ComponentFixture<UserRecipeCategoryDinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecipeCategoryDinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecipeCategoryDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
