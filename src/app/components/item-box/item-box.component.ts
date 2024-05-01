import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
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
}
