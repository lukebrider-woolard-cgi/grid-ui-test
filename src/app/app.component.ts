import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GridStack, GridStackOptions } from 'gridstack';
import { GridstackComponent, GridstackModule, NgGridStackOptions, gsCreateNgComponents } from 'gridstack/dist/angular';
import { HeaderComponent } from './components/header/header.component';
import { ItemSelectionBarComponent } from './components/item-selection-bar/item-selection-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridstackModule, FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, HeaderComponent, ItemSelectionBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild(GridstackComponent) gridComp?: GridstackComponent;

  private serializedData?: NgGridStackOptions;
  private id: number = 0;

  gridSize: number = 100;
  noOfColumns: number = 12;
  gridGutter: number = 10;

  gridOptions: NgGridStackOptions = {
    column: this.noOfColumns,
    cellHeight: this.gridSize,
    margin: this.gridGutter,
    minRow: 1, // don't collapse when empty
    removable: '.trash',
    draggable: {
      handle: '.move-handle'
    },
    float: true,
    children: []
  }

  ngOnInit(): void {
    GridstackComponent.addComponentToSelectorType([ImageBoxComponent, TextBoxComponent]); // only needed when loading in with items
  }

  addWidget(type: string): void {
    const newWidget = { x:0, y:0, w:2, h:2, selector:type, id:(String(this.id++))};
    this.gridComp?.grid?.addWidget(newWidget);
  }

  loadGrid(): void {
    if (!this.gridComp) return;
    GridStack.addGrid(this.gridComp.el, this.serializedData);
  }

  saveGrid(): void {
    this.serializedData = this.gridComp?.grid?.save(false, true) as GridStackOptions || '';
    console.log(JSON.stringify(this.serializedData, null, '  '))
  }

  clearGrid(): void {
    if (!this.gridComp) return;
    this.gridComp.grid?.removeAll();
  }
}
