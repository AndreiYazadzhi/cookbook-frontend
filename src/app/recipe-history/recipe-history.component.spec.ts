import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHistoryComponent } from './recipe-history.component';

describe('RecipeHistoryComponent', () => {
  let component: RecipeHistoryComponent;
  let fixture: ComponentFixture<RecipeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
