import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelectionBarComponent } from './item-selection-bar.component';

describe('ItemSelectionBarComponent', () => {
  let component: ItemSelectionBarComponent;
  let fixture: ComponentFixture<ItemSelectionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSelectionBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemSelectionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
