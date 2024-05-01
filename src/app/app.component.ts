import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CdkDragDrop,  moveItemInArray } from '@angular/cdk/drag-drop'
import { HeaderComponent } from './components/header/header.component';
import { ParentForItemsComponent } from './components/parent-for-items/parent-for-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, HeaderComponent, ParentForItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public components = [
    'textbox',
    'image',
  ]

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.components, event.previousIndex, event.currentIndex);
  }

  add(component: string) {
    this.components.push(component)
  }

  save() {
    console.log("saving...")
  }
}
