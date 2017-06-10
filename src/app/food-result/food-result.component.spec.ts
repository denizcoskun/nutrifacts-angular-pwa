import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodResultComponent } from './food-result.component';

describe('FoodResultComponent', () => {
  let component: FoodResultComponent;
  let fixture: ComponentFixture<FoodResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
