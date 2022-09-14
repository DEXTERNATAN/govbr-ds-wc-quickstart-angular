import { Component } from "@angular/core";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
})
export class BreadcrumbComponent {
  label = "Breadcrumb";

  crumbs = [
    {
      label: "Página Inicial",
      url: "/",
      target: "_blank",
      home: true,
    },
    {
      label: "Tela Anterior 01",
      target: "_blank",
      url: "#",
    },
    {
      label: "Tela Anterior 02",
      target: "_blank",
      url: "#",
    },
    {
      label: "Tela Anterior 03",
      target: "_blank",
      url: "#",
    },
    {
      label: "Tela Anterior 04",
      target: "_blank",
      url: "#",
    },
    {
      label: "Página Atual",
      active: true,
    },
  ];
}
