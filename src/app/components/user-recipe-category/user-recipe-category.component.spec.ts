import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipeCategoryComponent } from './user-recipe-category.component';

describe('UserRecipeCategoryComponent', () => {
  let component: UserRecipeCategoryComponent;
  let fixture: ComponentFixture<UserRecipeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecipeCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecipeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
