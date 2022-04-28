import {Component, OnInit} from '@angular/core';
import {ToggleSidebarService} from "@shared/services/toggle-sidebar.service";
import {
  faArrowRightFromBracket,
  faBars,
  faChartLine,
  faChevronRight,
  faCode,
  faExclamationTriangle,
  faSign,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {faBell, faDotCircle, faEnvelope, faFileLines, faUser} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  bars = faBars;
  chevronRight = faChevronRight;
  dotCircle = faDotCircle;
  code = faCode;
  fileLines = faFileLines;
  bell = faBell;
  chartLine = faChartLine;
  signal = faSign;
  exclamation = faExclamationTriangle;
  userPlus = faUserPlus;
  envelope = faEnvelope;
  user = faUser;
  arrowRightFromBracket = faArrowRightFromBracket;

  constructor(private toggleSidebar: ToggleSidebarService) {
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.toggleSidebar.toggle();
    console.log('Prueba')
  }

  isToggled() {
    return this.toggleSidebar.isOpen;
  }
}
