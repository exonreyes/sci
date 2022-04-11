import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchersComponent} from "@modules/humansrc/launchers/launchers.component";
import {UsersComponent} from "@modules/humansrc/apps/user/users/users.component";


const routes: Routes = [{
    path: '',
    component: LaunchersComponent
},
    {
        path: 'users',
        loadChildren: () => import('@modules/humansrc/apps/user/user.module')
            .then((m) => m.UserModule)

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class HumansrcRoutingModule {
}
