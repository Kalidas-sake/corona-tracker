import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private httpClient: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>('assets/health-quotes.json');
  }
}
