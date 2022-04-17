import {NgModule} from '@angular/core';

import {BusinessRoutingModule} from './business-routing.module';
import {BusinessComponent} from './business.component';
import {SharedModule} from "@shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        BusinessComponent
    ],
    imports: [
        BusinessRoutingModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class BusinessModule {
}
