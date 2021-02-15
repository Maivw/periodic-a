import { Component } from '@angular/core';
@Component({
  selector: 'app-nav',
  template: `
  <div>
    <div class="navbar">
      <div class="navbar__column">HOME</div>
      <div class="navbar__column">ACTIVITY</div>
      <div class="navbar__column">USER</div>
      <div class="navbar__column" (click) ="onShowConfiguration()">CONFIGURATION</div>
      <div class="navbar__column">SETTINGS</div>
    </div>
    <div *ngIf="isShowConfiguration" class="configurationNav">
      <div class="configurationNav__column">
        providers
      </div>
      <div class="configurationNav__column">
        bookables
      </div>
      <div  class="configurationNav__column"(click)="onShowCreate()">
        resources
      </div>
      <div class="configurationNav__column">
        forms
      </div>
      <div class="configurationNav__column">
        messages
      </div>
    </div>
    <app-create-resources *ngIf="isShowConfiguration && isShowCreate"></app-create-resources>
  </div>`,
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent {
  isShowConfiguration=  false;
  isShowCreate = false;
  onShowConfiguration() {
    this.isShowConfiguration = !this.isShowConfiguration;
    this.isShowCreate = false;
  }
  onShowCreate() {
    this.isShowCreate = !this.isShowCreate

  }

}
