import {Component, Input, OnInit} from '@angular/core';
import {ICardLauncher} from "@shared/components/launcher-card/ilauncher-card.metadata";


@Component({
  selector: 'app-launcher-card',
  templateUrl: './launcher-card.component.html',
  styleUrls: ['./launcher-card.component.css']
})
export class LauncherCardComponent implements OnInit {
  @Input()
  data!: ICardLauncher;

  constructor() {
  }

  ngOnInit(): void {
  }

}
