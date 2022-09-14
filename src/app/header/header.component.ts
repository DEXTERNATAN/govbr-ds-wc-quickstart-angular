import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  title = "Web Components GOVBR-DS -  Quickstart Angular";
  subtitle = "Baseado na v1.3.0 do @govbr-ds/webcomponents";

  image = {
    src: "/assets/govbr-logo.png",
    alt: "logo",
  };

  links = [
    {
      name: "GOVBR-DS",
      href: "https://gov.br/ds",
      title: "Padrão Digital de Governo",
      target: "_blank",
    },
    {
      name: "Serpro",
      href: "https://www.serpro.gov.br/",
      title: "SERPRO",
      target: "_blank",
    },
    {
      name: "Dataprev",
      href: "https://portal.dataprev.gov.br/",
      title: "Dataprev",
      target: "_blank",
    },
  ];
}
