import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFormBarComponent } from './grid-form-bar.component';

describe('GridFormBarComponent', () => {
  let component: GridFormBarComponent;
  let fixture: ComponentFixture<GridFormBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridFormBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridFormBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
