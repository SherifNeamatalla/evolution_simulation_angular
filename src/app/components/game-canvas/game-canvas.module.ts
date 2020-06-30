import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameCanvasComponent} from './game-canvas.component';
import {ConfigurationDisplayModule} from '../configuration-display/configuration-display.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SimulationStateDisplayModule} from '../simulation-state-display/simulation-state-display.module';
import {SimulationCanvasModule} from '../../simulation-canvas/simulation-canvas.module';


@NgModule({
  declarations: [GameCanvasComponent],
  exports: [GameCanvasComponent],
  imports: [
    CommonModule,
    ConfigurationDisplayModule,
    FlexLayoutModule,
    SimulationStateDisplayModule,
    SimulationCanvasModule
  ]
})
export class GameCanvasModule {
}
