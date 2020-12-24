import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobStats } from '../interfaces/stats';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getGlobalStats(): Observable<GlobStats> {
    return this.http.get<GlobStats>('https://api.covid19api.com/summary');
  }

}
