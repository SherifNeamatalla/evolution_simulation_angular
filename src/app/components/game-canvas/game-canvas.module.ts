import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameCanvasComponent} from './game-canvas.component';
import {ConfigurationDisplayModule} from '../configuration-display/configuration-display.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SimulationStateDisplayModule} from '../simulation-state-display/simulation-state-display.module';
import {SimulationCanvasModule} from '../simulation-canvas/simulation-canvas.module';
import {CreatureDetailDisplayModule} from '../creature-detail-display/creature-detail-display.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PopulationStatisticsDisplayModule} from '../population-statistics-display/population-statistics-display.module';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [GameCanvasComponent],
  exports: [GameCanvasComponent],
  imports: [
    CommonModule,
    ConfigurationDisplayModule,
    FlexLayoutModule,
    SimulationStateDisplayModule,
    SimulationCanvasModule,
    CreatureDetailDisplayModule,
    MatButtonModule,
    MatIconModule,
    PopulationStatisticsDisplayModule,
    MatDividerModule
  ]
})
export class GameCanvasModule {
}
