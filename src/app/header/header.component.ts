import { Component } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  links = `[
        { name: 'GOVBR-DS', href: 'https://gov.br/ds', title: 'Padrão Digital de Governo', target: '_blank'},
        { name: 'Dataprev', href: 'https://portal.dataprev.gov.br/', title: 'Dataprev', target: '_blank'},
        { name: 'Serpro', href: 'https://www.serpro.gov.br/', title: 'SERPRO', target: '_blank'}
      ]`;
}
