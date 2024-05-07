import { Component } from '@angular/core';
import { ItemBoxComponent } from '../item-box/item-box.component';

@Component({
  selector: 'app-item-selection-bar',
  standalone: true,
  imports: [ItemBoxComponent],
  templateUrl: './item-selection-bar.component.html',
  styleUrl: './item-selection-bar.component.css'
})
export class ItemSelectionBarComponent {

}
