import {Component, OnInit} from '@angular/core';
import {SimulationControllerViewModelService} from '../../simulationcontrollers/simulation-controller-view-model.service';

@Component({
  selector: 'app-creature-detail-display',
  templateUrl: './creature-detail-display.component.html',
  styleUrls: ['./creature-detail-display.component.css']
})
export class CreatureDetailDisplayComponent implements OnInit {

  constructor(public simulationVMS: SimulationControllerViewModelService) {
  }

  ngOnInit(): void {
  }

}
