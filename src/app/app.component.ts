import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridStack, GridStackOptions } from 'gridstack';
import { GridstackComponent, GridstackModule, NgGridStackOptions } from 'gridstack/dist/angular';
import { HeaderComponent } from './components/header/header.component';
import { GridFormBarComponent } from './components/grid-form-bar/grid-form-bar.component';
import { ItemSelectionBarComponent } from './components/item-selection-bar/item-selection-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridstackModule, HeaderComponent, GridFormBarComponent, ItemSelectionBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // Access the grid via the wrapper so it can be updated
  @ViewChild(GridstackComponent) gridComp?: GridstackComponent;

  serializedData?: NgGridStackOptions;
  id: number = 0;
  gridRowHeight: number = 100;
  noOfColumns: number = 12;

  gridOptions: NgGridStackOptions = {
    column: this.noOfColumns,
    cellHeight: this.gridRowHeight,
    minRow: 1, // don't collapse when empty
    removable: '.trash', // div that acts as trash bin
    draggable: {
      handle: '.move-handle' // use handle to avoid click conflicts
    },
    float: true, // determines whether items can be placed anywhere or stack vertically
    children: []
  }

  ngOnInit(): void {
    // All components to be added to the grid need to be included here or they won't work
    GridstackComponent.addComponentToSelectorType([ImageBoxComponent, TextBoxComponent]);
  }

  updateGridFormat(settings: {cellSize: number, columns: number}): void {
    this.gridComp?.grid?.column(settings.columns);
    this.gridComp?.grid?.cellHeight(settings.cellSize);
  }

  addWidget(type: string): void {
    const newWidget = { autoPosition: true, w:1, h:1, selector:type, id:(String(this.id++))};
    this.gridComp?.grid?.addWidget(newWidget);
  }

  loadGrid(): void {
    if (!this.gridComp) return;
    GridStack.addGrid(this.gridComp.el, this.serializedData);

    // set to default if get something unexpected back (column isn't present if set to default of 12)
    this.gridRowHeight = this.serializedData?.cellHeight !== undefined ? this.serializedData?.cellHeight as number : 100;
    this.noOfColumns = typeof this.serializedData?.column === 'number' ? this.serializedData?.column : 12;
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
