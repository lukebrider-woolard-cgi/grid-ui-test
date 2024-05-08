import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-grid-form-bar',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './grid-form-bar.component.html',
  styleUrl: './grid-form-bar.component.css'
})
export class GridFormBarComponent {
  @Input() gridRowHeight: number;
  @Input() noOfColumns: number;
  @Output() onSubmit: EventEmitter<{cellSize: number, columns: number}> = new EventEmitter();

  onFormSubmit() {
    this.onSubmit.emit({cellSize: this.gridRowHeight, columns: this.noOfColumns});
  }
}
