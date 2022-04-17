import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
}, {path: 'business', loadChildren: () => import('./modules/business/business.module').then(m => m.BusinessModule)},
    {path: 'humansrc', loadChildren: () => import('./modules/humansrc/humansrc.module').then(m => m.HumansrcModule)},
    {
        path: 'inventory',
        loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule)
    },
    {path: 'sales', loadChildren: () => import('./modules/sales/sales.module').then(m => m.SalesModule)}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})], exports: [RouterModule]
})
export class AppRoutingModule {
}