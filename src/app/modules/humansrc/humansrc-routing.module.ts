import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HumansrcComponent} from './humansrc.component';

const routes: Routes = [{path: '', component: HumansrcComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HumansrcRoutingModule {
}
