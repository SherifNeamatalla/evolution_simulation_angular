import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopulationStatisticsDisplayComponent} from './population-statistics-display.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [PopulationStatisticsDisplayComponent],
  exports: [PopulationStatisticsDisplayComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class PopulationStatisticsDisplayModule {
}
