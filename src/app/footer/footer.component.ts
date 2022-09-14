import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  license =
    "Todo o conteúdo deste site está publicado sob a licença CC0 1.0 Universal";

  social = {
    label: "Redes Sociais",
    networks: [
      {
        href: "https://discord.gg/U5GwPfqhUP",
        image: "assets/discord.svg",
        description: "Discord",
        target: "_blank",
      },
    ],
  };
}
