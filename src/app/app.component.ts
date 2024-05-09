import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridStackOptions, numberOrString } from 'gridstack';
import { GridstackComponent, GridstackModule } from 'gridstack/dist/angular';
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

  serializedData?: GridStackOptions;
  id: number = 0;
  noOfColumns: number = 12;
  gridRowHeight: numberOrString = '5em';

  // Initial grid options
  gridOptions: GridStackOptions = {
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

  updateGridFormat(columns: number): void {
    this.gridComp?.grid?.column(columns, 'moveScale');
  }

  addWidget(type: string): void {
    const newWidget = { autoPosition: true, w:1, h:1, selector:type, id:(String(this.id++))};
    this.gridComp?.grid?.addWidget(newWidget);
  }

  loadGrid(): void {
    if (!this.gridComp) return;
    // load widgets
    this.gridComp.grid?.load(this.serializedData?.children ? this.serializedData?.children : [])

    // set to default if get something unexpected back (values are not present if default values are set)
    const noOfColumns = typeof this.serializedData?.column === 'number' ? this.serializedData?.column : this.noOfColumns;
    let gridRowHeight = this.serializedData?.cellHeight !== undefined ? this.serializedData?.cellHeight : this.gridRowHeight;

    // needed if using a value for cellHeight other than px
    if (this.serializedData?.cellHeightUnit !== undefined) {
      gridRowHeight = gridRowHeight + this.serializedData?.cellHeightUnit;
    }

    // update value for form
    this.noOfColumns = noOfColumns;
    // update grid format
    this.gridComp.grid?.column(noOfColumns, 'moveScale');
    this.gridComp.grid?.cellHeight(gridRowHeight);
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
