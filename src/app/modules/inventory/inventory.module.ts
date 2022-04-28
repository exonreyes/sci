import {NgModule} from '@angular/core';

import {InventoryRoutingModule} from './inventory-routing.module';
import {InventoryComponent} from './inventory.component';
import {SharedModule} from "@shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    InventoryRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class InventoryModule {
}
