import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})

export class CountryPageComponent implements OnInit {

  public pais? : Country;
  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private countriesService : CountryService,

  ){}


  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap( ({alphaCode3}) => this.countriesService.searchCountryByAlphaCode(alphaCode3)),
    ).subscribe( country2 => {
      if (!country2) return this.router.navigateByUrl('');
      return this.pais = country2;

    })


  }

}
