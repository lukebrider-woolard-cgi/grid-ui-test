import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { CdkDrag, CdkDragMove, CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { TextBoxComponent } from '../text-box/text-box.component';
import { ImageBoxComponent } from '../image-box/image-box.component';

@Component({
  selector: 'app-item-box',
  standalone: true,
  imports: [NgIf, CdkDrag, CdkDragHandle, MatIconModule, ImageBoxComponent, TextBoxComponent],
  templateUrl: './item-box.component.html',
  styleUrl: './item-box.component.css'
})
export class ItemBoxComponent {
  @Input() type: string;
  // @Output() dragMovedEvent = new EventEmitter<CdkDragMove>();

  // dragMoved(event: CdkDragMove) {
  //   this.dragMovedEvent.emit(event);
  // }
}
