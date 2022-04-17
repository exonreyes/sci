import {Component, ElementRef, ViewChild} from '@angular/core';
import {ToggleSidebarService} from "@shared/services/toggle-sidebar.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('sideTogglet') title!: ElementRef;

    constructor(private toggleSidebarService: ToggleSidebarService) {
    }

    private _toggled = false;

    get toggled(): boolean {
        return this._toggled;
    }

    ngOnInit(): void {
        this.toggleSidebarService.change.subscribe(isOpen => this._toggled = isOpen);
    }

    // Evento disparado al hacer touch/click en el area principal de la pantalla,

    onToggle() {
        this.toggleSidebarService.toggle();
    }

    // como comodidad para minimizar el menu sidebar
    eventContent() {
        if (window.innerWidth >= 992) return
        if (this.title.nativeElement.classList.contains('sidenav-toggled')) {
            this.toggleSidebarService.toggle();
        }
    }
}
