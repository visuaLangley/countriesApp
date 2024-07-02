import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',

})
export class ByCapitalPageComponent {

  public countries : Country[] = [];
  constructor(private countrieService : CountryService){}


  searchByCapital( term : string ) : void {
    this.countrieService.searchCapital( term ).subscribe( countries2 => {
      this.countries = countries2;
    } )
  }

}
