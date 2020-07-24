import {Component, OnInit} from '@angular/core';
import {SimulationControllerViewModelService} from '../../simulationcontrollers/simulation-controller-view-model.service';

@Component({
  selector: 'app-simulation-canvas',
  templateUrl: './simulation-canvas.component.html',
  styleUrls: ['./simulation-canvas.component.scss']
})
export class SimulationCanvasComponent implements OnInit {

  constructor(public simulationVMS: SimulationControllerViewModelService) {
  }

  ngOnInit(): void {
  }

}
