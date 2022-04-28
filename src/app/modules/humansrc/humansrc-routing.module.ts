import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HumansrcComponent} from './humansrc.component';
import {BankComponent} from "@modules/humansrc/bank/bank.component";


const routes: Routes = [
  {
    path: '',
    component: HumansrcComponent
  },
  {
    path: 'bank',
    component: BankComponent,
    loadChildren: () => import('@modules/humansrc/bank/bank.module').then(m => m.BankModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumansrcRoutingModule {
}
