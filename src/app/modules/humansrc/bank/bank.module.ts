import {NgModule} from '@angular/core';

import {BankRoutingModule} from './bank-routing.module';
import {BankComponent} from './bank.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    BankComponent
  ],
  imports: [
    BankRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class BankModule { }
