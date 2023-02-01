import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipeCategoryLunchComponent } from './user-recipe-category-lunch.component';

describe('UserRecipeCategoryLunchComponent', () => {
  let component: UserRecipeCategoryLunchComponent;
  let fixture: ComponentFixture<UserRecipeCategoryLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecipeCategoryLunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecipeCategoryLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
