import {Component, OnInit} from '@angular/core';
import {SimulationControllerViewModelService} from '../../simulationcontrollers/simulation-controller-view-model.service';

@Component({
  selector: 'app-configuration-display',
  templateUrl: './configuration-display.component.html',
  styleUrls: ['./configuration-display.component.css']
})
export class ConfigurationDisplayComponent implements OnInit {

  constructor(public simulationVMS: SimulationControllerViewModelService) {
  }

  ngOnInit(): void {
  }

}
