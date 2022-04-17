import {NgModule} from '@angular/core';

import {BanksRoutingModule} from './banks-routing.module';
import {BanksComponent} from './banks.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [
        BanksComponent
    ],
    imports: [
        BanksRoutingModule,
        FontAwesomeModule,
        SharedModule
    ]
})
export class BanksModule {
}
