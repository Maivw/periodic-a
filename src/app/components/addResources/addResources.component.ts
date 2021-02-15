import {Component,Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add',
  template: `
    <div class="addResource__wrapper">
      <input type="text" [(ngModel)]="searchInput" (keyup)="fetchSeries($event)" placeholder="search for a resource"  class="addResource__input"/>
      <ul>
        <div *ngFor="let item of searchResult">
        <label class="checkbox">
        <span class="checkbox__input">
          <input type="checkbox" name="checkbox" [checked]="resourceCheckbox" (change)="onSelectItem(item)">
          <span class="checkbox__control">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true" focusable="false">
              <path  fill='none' stroke='#ffffff' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /></svg>
          </span>
        </span>
        <span class="radio__label">{{item.name}}</span>
        </label>
        </div>
      </ul>
      <button class="addResource__button" (click)="toggle()">ADD SELECTED</button>
    </div>
  `,
  styleUrls: ['./addResources.component.scss']
})
export class AddResourcesComponent implements OnInit, OnChanges{
  public searchInput: String = "";
  public searchResult: Array<any> = [];
  @Input() isOpen: boolean;
  @Input() list: boolean;
  @Input() resourceCheckbox:boolean = false;
  @Output() checkedChange: EventEmitter<any>=  new EventEmitter<any>();
  @Output() listChangeToShow: EventEmitter<any>=  new EventEmitter<any>();

  toggle() {
   this.checkedChange.emit(!this.isOpen);
   this.listChangeToShow.emit(this.listSelected)
  }
  @Input() set optionsList(val:any[]) {
    this._optionsList = val;
  }
  private _optionsList = [];
  get optionsList() {
    return this._optionsList;
  }
  resSelected = {};
  listSelected = [];

  onSelectItem(newValue) {
    this.resSelected = newValue;
    const isExit = this.listSelected?.find(item => item.id === this.resSelected["id"]);
    if(isExit) {
     this.listSelected= this.listSelected?.filter(item => item.id !== this.resSelected["id"]);
    } else {
      this.listSelected = [...this.listSelected, this.resSelected]
    }
  }
  constructor() {}

  ngOnInit(){};
  ngOnChanges(changes: SimpleChanges){};

  fetchSeries(event: any) {
    if (event.target.value === "") {
      return (this.searchResult = []);
    }
    this.searchResult = this.optionsList.filter(series => {
      return series.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
  }
}
