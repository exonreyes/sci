import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkeletonComponent} from "@layout/skeleton/skeleton.component";
import {app_name} from "@data/constants/apps-description";

const routes: Routes = [
  {
    path: '',
    redirectTo: app_name,
    pathMatch: 'full'
  },
  {
    path: app_name,
    component: SkeletonComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'business',
        loadChildren: () => import('./modules/business/business.module').then(m => m.BusinessModule)
      },
      {
        path: 'humansrc',
        loadChildren: () => import('./modules/humansrc/humansrc.module').then(m => m.HumansrcModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('./modules/sales/sales.module').then(m => m.SalesModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: app_name,
    pathMatch: 'full'
  }
];

/*ng generate module sales --route sales --module app.module*/
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
