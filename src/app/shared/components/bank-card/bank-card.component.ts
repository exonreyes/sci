import {Component, Input, OnInit} from '@angular/core';
import {IBankCard} from "@shared/components/bank-card/ibank-card.metadata";

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.css']
})
export class BankCardComponent implements OnInit {
  @Input() data!: IBankCard;

  constructor() {
  }

  ngOnInit(): void {
  }

}
