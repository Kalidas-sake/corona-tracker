import { Component, OnInit } from '@angular/core';
import { Quote } from '../interfaces/quote';
import { QuotesService } from '../services/quotes.service';
import { Utils } from '../utils/utils';
import { CountToDirective } from "angular-count-to";
import { CovidService } from '../services/covid.service';
import { Country, GlobStats } from '../interfaces/stats';

@Component({
  selector: 'sk-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countryStats: Country[];

  theQuote: Quote;
  loadDuration: number = 1;
  globStats: GlobStats;

  constructor(private quotesService: QuotesService, private covidService: CovidService) {
  }

  ngOnInit() {
    this.quotesService.getQuotes().subscribe((quotes) => {
      this.theQuote = quotes[Utils.getRandomNumber(0, quotes.length - 1)];
      console.log(this.theQuote);
    })

    this.covidService.getGlobalStats().subscribe((globStat) => {
      this.globStats = globStat;
      this.countryStats = globStat.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
      // console.log(this.globStats.Countries[0].Country);
    })

  }


  onSearchCountry(key: string) {
    console.log(`search key is: ${key}`);
    const searchResult = this.globStats.Countries
      .filter((country) => {
        const countryName = country.Country.toLowerCase();
        if (countryName.includes(key.toLowerCase())) {
          return true;
        } else {
          return false;
        }

      })
      .sort((a, b) => {
        return b.TotalConfirmed - a.TotalConfirmed;
      });
    // console.log(`Search result:`, searchResult);

    this.countryStats = searchResult;
  }


}
