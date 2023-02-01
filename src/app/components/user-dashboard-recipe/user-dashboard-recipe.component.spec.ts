import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardRecipeComponent } from './user-dashboard-recipe.component';

describe('UserDashboardRecipeComponent', () => {
  let component: UserDashboardRecipeComponent;
  let fixture: ComponentFixture<UserDashboardRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
