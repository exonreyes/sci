import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkeletonComponent} from "@layout/skeleton/skeleton.component";
import {DashboardComponent} from "@modules/dashboard/dashboard.component";
import {AppConstants} from "@data/constants/AppConstants";

const routes: Routes = [{
    path: '', redirectTo: '/' + AppConstants.APP_NAME + '/dashboard', pathMatch: 'full'
}, {
    path: AppConstants.APP_NAME, component: SkeletonComponent, children: [{
        path: 'dashboard', component: DashboardComponent
    }, {
        path: AppConstants.MOD_SALE, loadChildren: () => import('@modules/sales/sales.module')
            .then((m) => m.SalesModule)
    }, {
        path: AppConstants.MOD_INVENTORY, loadChildren: () => import('@modules/inventory/inventory.module')
            .then((m) => m.InventoryModule)
    }, {
        path: AppConstants.MOD_HUMANSRC, loadChildren: () => import('@modules/humansrc/humansrc.module')
            .then((m) => m.HumansrcModule)
    }, {
        path: AppConstants.MOD_BUSINESS, loadChildren: () => import('@modules/business/business.module')
            .then((m) => m.BusinessModule)
    }, {
        path: '**', redirectTo: '/' + AppConstants.APP_NAME + '/dashboard', pathMatch: 'full'
    },]
}, {
    path: '**', redirectTo: '/' + AppConstants.MOD_SALE + '/dashboard', pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})], exports: [RouterModule]
})
export class AppRoutingModule {
}
