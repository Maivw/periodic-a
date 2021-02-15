import { Component } from '@angular/core';
@Component({
  selector: 'app-header-form',
  template: `
  <div class="headerForm">
			<div class="headerForm__title">
				Resource Groups <div class="headerForm__title-text"> Create</div>
			</div>
			<div class="headerForm__buttons" >
        <button mat-raised-button class="headerForm__buttonCancel">CANCEL</button>
        <button mat-raised-button class="headerForm__buttonSave">SAVE</button>
			</div>
		</div>`,
  styleUrls: ['./headerForm.component.scss']
})
export class HeaderFormComponent {

}
