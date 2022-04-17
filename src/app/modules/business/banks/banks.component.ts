import {Component, OnInit} from '@angular/core';
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import {IbankCard} from "@shared/components/bank-card/ibank-card.metadata";

@Component({
    selector: 'app-banks', templateUrl: './banks.component.html', styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
    creditCard = faBuildingColumns;
    account: IbankCard = {
        alias: '88432',
        account_number: '',
        icon: '',
        status: '',
        beneficiary:'Marcos Bustamante Salazár',
        name_bank: 'Banamex',
        description: '',
        id: '',
        interbank_code: '',
        isDefault: true
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}
