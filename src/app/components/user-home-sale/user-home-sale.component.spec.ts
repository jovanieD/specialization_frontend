import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeSaleComponent } from './user-home-sale.component';

describe('UserHomeSaleComponent', () => {
  let component: UserHomeSaleComponent;
  let fixture: ComponentFixture<UserHomeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
