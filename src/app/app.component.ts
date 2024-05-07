import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GridStack, GridStackOptions } from 'gridstack';
import { GridstackModule, elementCB, gsCreateNgComponents, nodesCB } from 'gridstack/dist/angular';
import { HeaderComponent } from './components/header/header.component';
import { ItemSelectionBarComponent } from './components/item-selection-bar/item-selection-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridstackModule, FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, HeaderComponent, ItemSelectionBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  gridSize: number = 100;
  noOfColumns: number = 12;
  gridGutter: number = 10;

  gridOptions: GridStackOptions = {
    column: this.noOfColumns,
    cellHeight: this.gridSize,
    margin: this.gridGutter,
    minRow: 1, // don't collapse when empty
    removable: '.trash',
    draggable: {
      handle: '.move-handle'
    },
    acceptWidgets: true,
    float: true,
  }

  ngOnInit(): void {
    GridStack.addRemoveCB = gsCreateNgComponents;
    GridStack.setupDragIn('.sidebar .grid-stack-item', { appendTo: 'body', helper: 'clone' });
  }

  onChange(data: nodesCB) {
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }

  onResizeStop(data: elementCB) {
    console.log('resizestop ', data.el.gridstackNode);
  }

  save() {
    console.log("save")
  }

  load() {
    console.log("load")
  }
}
