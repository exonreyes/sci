import {NgModule} from '@angular/core';
import {SalesRoutingModule} from './sales-routing.module';
import {SalesComponent} from './sales.component';
import {SharedModule} from "@shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CoreModule} from "@core/core.module";

@NgModule({
  declarations: [SalesComponent],
  imports: [
    SalesRoutingModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class SalesModule {
}
