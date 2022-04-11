import {NgModule} from '@angular/core';
import {LaunchersComponent} from "@modules/humansrc/launchers/launchers.component";
import {SharedModule} from "@shared/shared.module";
import {HumansrcRoutingModule} from "@modules/humansrc/humansrc-routing.module";


@NgModule({
    declarations: [
        LaunchersComponent
    ],
    imports: [
        SharedModule,
        HumansrcRoutingModule
    ]
})
export class HumansrcModule {
}
