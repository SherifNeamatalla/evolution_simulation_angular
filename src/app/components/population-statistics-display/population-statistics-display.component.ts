import { Component, OnInit } from '@angular/core';
import {SimulationControllerViewModelService} from '../../simulationcontrollers/simulation-controller-view-model.service';

@Component({
  selector: 'app-population-statistics-display',
  templateUrl: './population-statistics-display.component.html',
  styleUrls: ['./population-statistics-display.component.css']
})
export class PopulationStatisticsDisplayComponent implements OnInit {

  constructor(public simulationVMS: SimulationControllerViewModelService) { }

  ngOnInit(): void {
  }

}
