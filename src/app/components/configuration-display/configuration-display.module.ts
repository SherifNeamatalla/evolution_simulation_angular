import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigurationDisplayComponent} from './configuration-display.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [ConfigurationDisplayComponent],
  exports: [ConfigurationDisplayComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class ConfigurationDisplayModule {
}
