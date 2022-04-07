import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ToggleSidebarService} from "@shared/services/toggle-sidebar.service";

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {
  @ViewChild('sideTogglet') title!: ElementRef;
  private _toggled = false;

  constructor(private toggleSidebarService: ToggleSidebarService) {
  }

  ngOnInit(): void {
    this.toggleSidebarService.change.subscribe(isOpen => this._toggled = isOpen);
  }

  onToggle() {
    this.toggleSidebarService.toggle();
  }

  // Evento disparado al hacer touch/click en el area principal de la pantalla,
  // como comodidad para minimizar el menu sidebar
  eventContent() {
    if (window.innerWidth >= 992) return
    if (this.title.nativeElement.classList.contains('sidenav-toggled')) {
      this.toggleSidebarService.toggle();
    }
  }

  get toggled(): boolean {
    return this._toggled;
  }
}
