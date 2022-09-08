import { Component } from "@angular/core";

@Component({
  selector: "footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  text =
    "Todo o conteúdo deste site está publicado sob a licença CC0 1.0 Universal";
  logo = `{
      'url': 'https://www.gov.br/ds/assets/img/govbr-logo.png',
      'description': 'Padrão Digital de Governo'
    }`;
  social = `{
      'label': 'Redes sociais',
      'networks': [
        {
          'href': 'https://discord.gg/U5GwPfqhUP',
          'image': 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384f934b806f37f4956_145dc557845548a36a82337912ca3ac5.svg',
          'description': 'Discord',
          'target':'_blank'
        }
      ]
    }`;
}
