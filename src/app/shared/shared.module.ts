import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import * as fromComponents from "./components";
import {LauncherCardComponent} from './components/launcher-card/launcher-card.component';

@NgModule({
    declarations: [...fromComponents.components, LauncherCardComponent],
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
    exports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, ...fromComponents.components, LauncherCardComponent]
})
export class SharedModule {
}
