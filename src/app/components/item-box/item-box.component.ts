import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImageBoxComponent } from '../image-box/image-box.component';
import { TextBoxComponent } from '../text-box/text-box.component';

@Component({
  selector: 'app-item-box',
  standalone: true,
  imports: [NgIf, MatIconModule, ImageBoxComponent, TextBoxComponent],
  templateUrl: './item-box.component.html',
  styleUrl: './item-box.component.css'
})
export class ItemBoxComponent {
  @Input() type: string;
}
