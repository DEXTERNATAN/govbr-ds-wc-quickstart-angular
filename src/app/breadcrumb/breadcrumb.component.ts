import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
})
export class BreadcrumbComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isCurrentRoute(routePath: string): Boolean {
    let currentRoute = this.route;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    return (
      currentRoute.snapshot.routeConfig?.path ===
      routePath.substring(1, routePath.length)
    );
  }
}
