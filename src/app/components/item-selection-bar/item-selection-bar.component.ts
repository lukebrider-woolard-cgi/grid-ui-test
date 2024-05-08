import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImageBoxComponent } from '../image-box/image-box.component';
import { TextBoxComponent } from '../text-box/text-box.component';

@Component({
  selector: 'app-item-selection-bar',
  standalone: true,
  imports: [MatIconModule, ImageBoxComponent, TextBoxComponent],
  templateUrl: './item-selection-bar.component.html',
  styleUrl: './item-selection-bar.component.css'
})
export class ItemSelectionBarComponent {
  @Output() onItemAdd: EventEmitter<string> = new EventEmitter();

  addItemToGrid(type: string) {
    this.onItemAdd.emit(type);
  }
}
