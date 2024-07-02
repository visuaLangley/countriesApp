import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',

})
export class ByRegionPageComponent {
  public region : Country[] = [];
  constructor(private regionsService : CountryService){}

searchByRegion(term : string) : void {
  this.regionsService.searchRegion(term).subscribe(region2 =>
    this.region = region2
  );
}
}
