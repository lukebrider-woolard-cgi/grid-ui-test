import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkDropList, CdkDragDrop,  moveItemInArray } from '@angular/cdk/drag-drop'
import { HeaderComponent } from './components/header/header.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CdkDropList, HeaderComponent, ItemBoxComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public items = [
    'textbox',
    'image'
  ]

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  add(item: string) {
    this.items.push(item)
  }

  save() {
    console.log("saving...")
  }
}
