import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimulationCanvasComponent} from './simulation-canvas.component';


@NgModule({
  declarations: [SimulationCanvasComponent],
  exports: [SimulationCanvasComponent],
  imports: [
    CommonModule
  ]
})
export class SimulationCanvasModule {
}
