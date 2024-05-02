import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularDraggableModule } from 'angular2-draggable';
import { IResizeEvent } from 'angular2-draggable/lib/models/resize-event'
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { NgFor, NgIf, NgStyle } from '@angular/common';

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
  imports: [RouterOutlet, AngularDraggableModule, MatIconModule, HeaderComponent, TextBoxComponent, ImageBoxComponent, NgFor, NgIf, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  gridSize = 100;

  items: Item[] = [];

  styleItem(item: Item): Object {
    return {
      left: `${item.offsetX}px`,
      top: `${item.offsetY}px`,
      width: `${item.width}px`,
      height: `${item.height}px`
    };
  }

  onMoveEnd(event: { x: number, y: number }, updatedItem: Item) {
    const updatedItems = this.items.map((item) => {
      if (item.id === updatedItem.id) {
        return {
          ...item,
          offsetX: item.offsetX + event.x,
          offsetY: item.offsetY + event.y
        };
      }
      return item;
    });
    this.items = updatedItems;
  }

  onResizeStop(event: IResizeEvent, updatedItem: Item) {
    const updatedItems = this.items.map((item) => {
      if (item.id === updatedItem.id) {
        return {
          ...item,
          width: event.size.width,
          height: event.size.height
        };
      }
      return item;
    });
    this.items = updatedItems;
  }

  add(itemType: string) {
    const newId = this.items.length > 0 ? Math.max.apply(null, this.items.map(item => item.id))+1 : 0;
    const newItem = { id: newId, type: itemType, offsetX: 0, offsetY: 0, width: 200, height: 200 };
    this.items.push(newItem);
  }

  save() {
    console.log(this.items)
  }

  load() {
    this.items = [
      {
          "id": 0,
          "type": "textbox",
          "offsetX": 600,
          "offsetY": 100,
          "width": 200,
          "height": 300
      },
      {
          "id": 1,
          "type": "image",
          "offsetX": 200,
          "offsetY": 100,
          "width": 400,
          "height": 300
      },
      {
          "id": 2,
          "type": "image",
          "offsetX": 400,
          "offsetY": 400,
          "width": 400,
          "height": 100
      },
      {
          "id": 3,
          "type": "textbox",
          "offsetX": 200,
          "offsetY": 400,
          "width": 200,
          "height": 100
      }
    ]
  }
}
