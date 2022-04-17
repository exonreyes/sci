import {NgModule} from '@angular/core';

import {HumansrcRoutingModule} from './humansrc-routing.module';
import {HumansrcComponent} from './humansrc.component';
import {SharedModule} from "@shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        HumansrcComponent
    ],
    imports: [
        HumansrcRoutingModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class HumansrcModule {
}
