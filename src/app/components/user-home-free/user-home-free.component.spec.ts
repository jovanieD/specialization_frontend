import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeFreeComponent } from './user-home-free.component';

describe('UserHomeFreeComponent', () => {
  let component: UserHomeFreeComponent;
  let fixture: ComponentFixture<UserHomeFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeFreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomeFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
