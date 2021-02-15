import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule ({
  imports: [ MatButtonModule,MatFormFieldModule,MatCheckboxModule,MatChipsModule,MatAutocompleteModule,MatSelectModule,MatInputModule,MatIconModule,MatToolbarModule ],
  exports: [  MatButtonModule,MatFormFieldModule,MatCheckboxModule, MatChipsModule,MatAutocompleteModule,MatSelectModule, MatInputModule,MatIconModule,MatToolbarModule]
})

export class MaterialModule {

}
