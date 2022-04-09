import {NgModule} from '@angular/core';

import {HumanSrcRoutingModule} from './human-src-routing.module';
import {SharedModule} from "@shared/shared.module";
import {LaunchersComponent} from './launchers/launchers.component';


@NgModule({
    declarations: [
        LaunchersComponent
    ],
    imports: [
        SharedModule,
        HumanSrcRoutingModule
    ]
})
export class HumanSrcModule {
}
