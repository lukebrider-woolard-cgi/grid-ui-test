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
  @Input() noOfColumns: number;
  @Input() gridRowHeight: number;
  @Output() onSubmit: EventEmitter<{rowHeight: number, columns: number}> = new EventEmitter();

  onFormSubmit() {
    this.onSubmit.emit({columns: this.noOfColumns, rowHeight: this.gridRowHeight});
  }
}
