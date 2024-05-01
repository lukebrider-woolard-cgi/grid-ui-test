import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop'
import { ItemBoxComponent } from '../item-box/item-box.component';
import { ImageBoxComponent } from '../image-box/image-box.component';
import { TextBoxComponent } from '../text-box/text-box.component';

@Component({
  selector: 'app-parent-for-items',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, CdkDropList, ItemBoxComponent, ImageBoxComponent, TextBoxComponent],
  templateUrl: './parent-for-items.component.html',
  styleUrl: './parent-for-items.component.css'
})
export class ParentForItemsComponent {
  @Input() components: string[];
  @Input() component: string;

  @Output() dragDropEvent = new EventEmitter<CdkDragDrop<string[]>>();

  dragDropHandler(event: CdkDragDrop<string[]>) {
    this.dragDropEvent.emit(event)
  }
}
