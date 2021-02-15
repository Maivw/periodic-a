import { Component , OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {providersData, resourcesData} from "../../resources.model"

@Component({
  selector: 'app-create-resources',
  template: `
  <app-header-form></app-header-form>
  <div class="create__body">
  <div class="create__sidebar">
    <div class="create__sidebar-item">
      <span>Basic Info</span>
    </div>
  </div>
  <div class="create__form"  >
    <div class="create__title">Basic info</div>
  <div>
    <mat-form-field class="create__input" >
      <mat-label>resource name *</mat-label>
      <input autocomplete="off" matInput value=""  [style.fontSize]="'3rem'" [style.color]="'#575757'">
    </mat-form-field>
    <mat-form-field appearance="fill" class="create__input">
      <mat-label>provider *</mat-label>
      <select  matNativeControl  [(ngModel)]="resourceSelected" (ngModelChange)="onSelected($event)">
        <option *ngFor="let resource of providers" [ngValue] ="resource">{{resource.viewName}}</option>
      </select>
    </mat-form-field>
    </div>
    <div (click)="this.isOpenAddResources = !this.isOpenAddResources" [class]="providerClicked ?'create__button-active':'create__button-disable'">
      <div [class]="providerClicked ?'create__buttonSign-active':'create__buttonSign-disable'"></div>
      <span>ADD RESOURCES</span>
    </div>
    <div class="create__showedList">
      <app-add *ngIf="isOpenAddResources && providerClicked " [optionsList] ="filterdOptions" [(isOpen)] ="isOpenAddResources" (checkedChange)="changeStateOpenAddResources($event)"  [list] ="items" (listChangeToShow)="changeListToShow($event)"></app-add>
    </div>
    <div class="selectedResources">
    <div class="selectedResource" *ngFor="let item of items">
      <div class="selectedResource__detail">
        <div class="selectedResource__detail-avatar">
        <div  src="https://color-hex.org/colors/fee5e8.png">
        </div>
        </div>
        <div class="selectedResource__detail-text">
          <div>{{item.name}}</div>
          <span>required</span>
        </div>
      </div>
      <div class="selectedResource__removeSign" (click)="removeItem(item.id)">X</div>
    </div>
  </div>
  </div>
  </div>
  `,
  styleUrls: ['./crearteResources.component.scss']
})
export class CreateResourcesComponent implements OnInit, OnChanges{
  providers= providersData;
  resourcesData = resourcesData;
  items = [];
  isOpenAddResources = false;
  providerClicked = false;
  resourceSelected :any= {};
  filterdOptions = [];
  fontSize= "3rem";

  ngOnInit(){};

  ngOnChanges(changes: SimpleChanges){
  };

  changeListToShow(event) {
    this.items = event;
  }

  changeStateOpenAddResources(event) {
    this.isOpenAddResources = event;
  }

  removeItem(id){
    this.items= this.items.filter(item => item.id !== id);
 }

  filterResources(res) {
    this.filterdOptions = this.resourcesData.filter(
      item => item.associated_providers[0]=== res.id
    );

    return this.filterdOptions;
  }

  onSelected(newValue) {
    this.resourceSelected = newValue;
    this.providerClicked = true;
    this.filterdOptions = this.filterResources(this.resourceSelected)
  }
  onClickButton () {
    this.isOpenAddResources = !this.isOpenAddResources;
  }

}
