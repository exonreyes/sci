import {Component, OnInit} from '@angular/core';
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import {bank} from "@data/mocks/Banks";

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  creditCard = faBuildingColumns;
  account=bank;

  constructor() { }

  ngOnInit(): void {
  }

}
