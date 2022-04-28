import {Component, OnInit} from '@angular/core';
import {faShop} from "@fortawesome/free-solid-svg-icons/faShop";
import {apps_sales} from "@data/constants/apps/sales/sales.data";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  apps = apps_sales;
  title_module = 'Deparamento de Ventas';
  shop = faShop;

  constructor() {
  }

  ngOnInit(): void {
  }

}
