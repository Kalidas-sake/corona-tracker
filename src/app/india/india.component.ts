import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from "ng2-google-charts";
import { IndiaData, StatesData, StateWiseData } from '../interfaces/states-data';
import { CovidService } from '../services/covid.service';
import { ChartSelectEvent } from "ng2-google-charts"

@Component({
  selector: 'sk-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  indiaData: IndiaData;
  states_data: (string | number)[][] = [['State', 'COVID-Confirmed Cases']];
  singleState: StateWiseData;
  mapReady = false;

  constructor(private covidService: CovidService) {
  }

  ngOnInit(): void {

    this.covidService.getIndiaStateWiseData().subscribe((data) => {
      this.indiaData = data;

      for (const state of data.statewise) {
        console.log(state);

        let temp = [state.state, Number(state.confirmed)];
        if (state.state === "Odisha") {
          temp = ['IN-OR', Number(state.confirmed)];
        }

        if (state.state === 'Total') {
          temp = [state.state, (Number(state.confirmed))]
        }

        this.states_data.push(temp);
      }
      // console.log(this.states_data);

      this.mapReady = true

    })

  }

  public geoChart: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_data,
    options: {
      region: 'IN', // INDIA
      colorAxis: { colors: ['#FFFFFF', '#800000'] },
      resolution: 'provinces',
      backgroundColor: '#00000',
      datalessRegionColor: '#00000',
      defaultColor: '#00000',
      legend: "none",
      height: "100%",
      width: "100%",
      chartArea: {
        height: "94%",
        width: "94%"
      }
    }
  };


  public select(event: ChartSelectEvent) {
    console.log(event.selectedRowValues[0]);

    this.singleState = this.indiaData.statewise.find((state, index) => {
      return state.state === event.selectedRowValues[0];
    })

  }

}
