import {NgModule} from '@angular/core';

import {SalesRoutingModule} from './sales-routing.module';
import {SalesComponent} from './sales.component';
import {SharedModule} from "@shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        SalesComponent
    ],
    imports: [
        SalesRoutingModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class SalesModule {
}
