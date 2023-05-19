import { Component } from '@angular/core';
import { Ecommerce } from './models/ecommerce.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  URL = 'https://my-json-server.typicode.com/paolocarugati/PC_ecommerce/db'
  data : Ecommerce;
  oEcommerce : Observable<Ecommerce>;

  constructor(public http: HttpClient){
    this.oEcommerce = http.get<Ecommerce>(this.URL);
    this.oEcommerce.subscribe( d => this.data = d );
  }
}
