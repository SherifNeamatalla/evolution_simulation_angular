import {Component, OnInit} from '@angular/core';
import {SimulationControllerViewModelService} from '../../simulationcontrollers/simulation-controller-view-model.service';


@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {

  constructor(public simulationVMS: SimulationControllerViewModelService) {
  }

  ngOnInit(): void {
  }
}
