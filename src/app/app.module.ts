import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {SkeletonComponent} from '@layout/skeleton/skeleton.component';
import {SharedModule} from '@shared/shared.module';
import {SidebarComponent} from '@layout/sidebar/sidebar.component';
import {TopbarComponent} from "@layout/topbar/topbar.component";
import {FooterComponent} from "@layout/footer/footer.component";
import {DashboardComponent} from "@modules/dashboard/dashboard.component";
import {CoreModule} from "@core/core.module";
import {AppComponent} from "./app.component";

@NgModule({
    declarations: [AppComponent, SkeletonComponent, SidebarComponent, TopbarComponent, FooterComponent, DashboardComponent,],
    imports: [BrowserModule, CoreModule, SharedModule, AppRoutingModule, FontAwesomeModule],
    providers: [{
        provide: LocationStrategy, useClass: PathLocationStrategy
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
