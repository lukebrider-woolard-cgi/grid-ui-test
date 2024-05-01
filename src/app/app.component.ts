import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkDrag, CdkDropList, CdkDropListGroup, CdkDragDrop, CdkDragMove, moveItemInArray } from '@angular/cdk/drag-drop'
import { ViewportRuler } from "@angular/cdk/overlay";
import { HeaderComponent } from './components/header/header.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CdkDrag, CdkDropList, CdkDropListGroup, HeaderComponent, ItemBoxComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public gridSize = 50;
  public gridMargin = 10;
  public items = [
    { id: 1, type: 'textbox' },
    { id: 2, type: 'image' }
  ]

  drop(event: CdkDragDrop<{id: number, type: string}[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  add(itemType: string) {
    const highestId = this.items.reduce(function(prev, current) {
      return (prev && prev.id > current.id) ? prev : current
    });
    const newItem = { id: highestId.id++, type: itemType };
    this.items.push(newItem)
  }

  save() {
    console.log("saving...")
  }
}
