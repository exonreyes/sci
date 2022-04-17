import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusinessComponent} from './business.component';

const routes: Routes = [{path: '', component: BusinessComponent}, {
    path: 'banks',
    loadChildren: () => import('./banks/banks.module').then(m => m.BanksModule)
}];

@NgModule({
    imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class BusinessRoutingModule {
}
