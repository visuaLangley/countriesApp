import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { CountriesModule } from '../../countries.module';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})

export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute : ActivatedRoute,
    private countriesService : CountryService,
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({ id }) => {
      this.countriesService.searchCountryByAlphaCode(id).subscribe( country => {
        console.log({country})
      });
    });

  }

}
