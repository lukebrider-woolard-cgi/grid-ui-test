import { Component } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';
import { IResizeEvent } from 'angular2-draggable/lib/models/resize-event'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';


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
  imports: [RouterOutlet, NgFor, NgIf, NgStyle, FormsModule, AngularDraggableModule, MatFormFieldModule, MatIconModule, MatInputModule, HeaderComponent, TextBoxComponent, ImageBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  gridSize: number = 100;
  noOfColumns: number = 12;
  noOfRows: number = 6;
  gridGutter: number = 10;

  items: Item[] = [];

  styleGrid(): Object {
    return {
      width: `${this.gridSize * this.noOfColumns}px`,
      height: `${this.gridSize * this.noOfRows}px`
    };
  }

  styleItem(item: Item): Object {
    return {
      left: `${item.offsetX}px`,
      top: `${item.offsetY}px`,
      width: `${item.width}px`,
      height: `${item.height}px`
    };
  }

  styleGutter(): Object {
    const gutter = this.gridGutter / 2
    return {
      top: `${gutter}px`,
      left: `${gutter}px`,
      bottom: `${gutter}px`,
      right: `${gutter}px`
    }
  }

  onMoveEnd(event: { x: number, y: number }, updatedItemId: number) {
    const updatedItems = this.items.map((item) => {
      if (item.id === updatedItemId) {
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

  onResizeStop(event: IResizeEvent, updatedItemId: number) {
    const updatedItems = this.items.map((item) => {
      if (item.id === updatedItemId) {
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
    const newItem = { id: newId, type: itemType, offsetX: 0, offsetY: 0, width: this.gridSize, height: this.gridSize };
    this.items.push(newItem);
  }

  delete(itemId: number) {
    const itemsWithSelectedItemRemoved = this.items.filter((item) => item.id !== itemId);
    this.items = itemsWithSelectedItemRemoved;
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
