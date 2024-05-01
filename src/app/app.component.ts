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
  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  public gridSize = 50;
  public gridMargin = 10;
  public items = [
    'textbox',
    'image'
  ]

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  add(item: string) {
    this.items.push(item)
  }

  save() {
    console.log("saving...")
  }
}
