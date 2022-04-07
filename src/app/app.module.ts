import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        SkeletonComponent,
        SidebarComponent,
        TopbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        AppRoutingModule
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: PathLocationStrategy
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
