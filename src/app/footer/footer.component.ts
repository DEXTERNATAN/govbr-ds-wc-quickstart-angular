import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public license: string = 'Todo o conteúdo deste site está publicado sob a licença MIT'
  public logo = {
    url: 'https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-negative.png',
    description: 'Logo de exemplo',
  }
}
