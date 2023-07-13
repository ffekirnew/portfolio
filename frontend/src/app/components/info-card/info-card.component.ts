import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements AfterViewChecked {
  isRouteActive: boolean;

  constructor(private route: ActivatedRoute) {
    this.isRouteActive = false; // Set initial value
  }

  ngAfterViewChecked() {
    console.log('here');
    this.updateRouteActiveState();
  }

  // Call this method when the route state changes to update `isRouteActive`
  updateRouteActiveState() {
    this.isRouteActive =
      this.route.snapshot.firstChild?.routeConfig?.path === 'contact';
  }
}
