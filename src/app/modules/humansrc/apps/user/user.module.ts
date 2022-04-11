import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from "@shared/shared.module";
import {UsersComponent} from './users/users.component';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        SharedModule,
        UserRoutingModule
    ]
})
export class UserModule {
}
