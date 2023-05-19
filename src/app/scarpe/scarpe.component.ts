import { Component, Input } from '@angular/core';
import { Scarpa } from '../models/ecommerce.model';

@Component({
  selector: 'app-scarpe',
  templateUrl: './scarpe.component.html',
  styleUrls: ['./scarpe.component.css']
})
export class ScarpeComponent {
  @Input() scarpe : Scarpa[]
}
