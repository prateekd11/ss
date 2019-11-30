import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemEditComponent } from './item-edit.component';

describe('FoodItemEditComponent', () => {
  let component: FoodItemEditComponent;
  let fixture: ComponentFixture<FoodItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
