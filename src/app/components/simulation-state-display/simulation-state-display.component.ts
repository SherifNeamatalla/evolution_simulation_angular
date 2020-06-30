import { Component, OnInit } from '@angular/core';
import {SimulationControllerViewModelService} from '../../simulationcontrollers/simulation-controller-view-model.service';

@Component({
  selector: 'app-simulation-state-display',
  templateUrl: './simulation-state-display.component.html',
  styleUrls: ['./simulation-state-display.component.css']
})
export class SimulationStateDisplayComponent implements OnInit {

  constructor(public simulationVMS: SimulationControllerViewModelService) { }

  ngOnInit(): void {
  }

}
