import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularDraggableModule } from 'angular2-draggable';
import { IResizeEvent } from 'angular2-draggable/lib/models/resize-event'
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { NgFor, NgIf } from '@angular/common';

export class Item {
  id: number;
  type: string;
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularDraggableModule, MatIconModule, HeaderComponent, TextBoxComponent, ImageBoxComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public gridSize = 100;

  public items: Item[] = [
    { id: 1, type: 'textbox', offsetX: 0, offsetY: 0, width: 200, height: 200 },
    { id: 2, type: 'image', offsetX: 0, offsetY: 200, width: 200, height: 200 }
  ]

  public offset = { x: 0, y: 0 };
  public size = { "width": 0, "height": 0 };

  onMoveEnd(event: { x: number, y: number }, updatedItem: Item) {
    this.items.map((item) => {
      if (item.id === updatedItem.id) {
        return {
          ...item,
          offsetX: event.x,
          offsetY: event.y
        };
      }
      return item;
    });
  }

  onResizeStop(event: IResizeEvent, updatedItem: Item) {
    this.items.map((item) => {
      if (item.id === updatedItem.id) {
        return {
          ...item,
          width: event.size.width,
          height: event.size.height
        };
      }
      return item;
    });
  }

  add(itemType: string) {
    const highestId = this.items.reduce(function(prev, current) {
      return (prev && prev.id > current.id) ? prev : current
    });
    const newItem = { id: highestId.id++, type: itemType, offsetX: 0, offsetY: 0, width: 200, height: 200 };
    this.items.push(newItem)
  }

  save() {
    console.log(this.items)
  }
}
