import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndiaData, StatesData, StateWiseData } from '../interfaces/states-data';
import { GlobStats } from '../interfaces/stats';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getGlobalStats(): Observable<GlobStats> {
    return this.http.get<GlobStats>('https://api.covid19api.com/summary');
  }

  getIndiaData(): Observable<Map<string, StatesData[]>> {
    return this.http.get<Map<string, StatesData[]>>("https://api.covid19india.org/state_district_wise.json");
  }


  getIndiaStateWiseData(): Observable<IndiaData> {
    return this.http.get<IndiaData>("https://api.covid19india.org/data.json");
  }


}
