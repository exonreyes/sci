import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import * as fromComponents from "./components";
import {LauncherCardComponent} from './components/launcher-card/launcher-card.component';
import {RouterModule} from "@angular/router";
import { BankCardComponent } from './components/bank-card/bank-card.component';

@NgModule({
    declarations: [...fromComponents.components, LauncherCardComponent, BankCardComponent],
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule],
    exports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule, ...fromComponents.components, LauncherCardComponent]
})
export class SharedModule {
}
