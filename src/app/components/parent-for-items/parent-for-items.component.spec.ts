import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentForItemsComponent } from './parent-for-items.component';

describe('ParentForItemsComponent', () => {
  let component: ParentForItemsComponent;
  let fixture: ComponentFixture<ParentForItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentForItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentForItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
