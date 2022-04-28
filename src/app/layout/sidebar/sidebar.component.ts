import {Component, OnInit} from '@angular/core';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faBell, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {modules_app} from "@data/constants/apps-description";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  angleDown = faAngleDown;
  bell = faBell;
  envelope = faEnvelope;
  urlDashboard = 'dashboard';
  modules = modules_app;

  constructor() {
  }

  ngOnInit(): void {

  }

}
