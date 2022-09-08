# Web Components GOVBR-DS - Quickstart Angular

## Descrição

Projeto exemplificando o uso da [biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents 'Biblioteca de Web Components do GOVBR-DS') em projetos [Angular](https://angular.io/ 'Angular').

[Visualização ao vivo](https://govbr-ds.gitlab.io/dev/wbc/govbr-ds-wbc-quickstart-angular/main/).

## Tecnologias

Esse projeto é desenvolvido usando:

1. [Biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents 'Biblioteca de Web Components do GOVBR-DS')
1. [Angular](https://angular.io/ 'Angular')

> Esse projeto foi construído usando uma versão nova do Angular, mas a [Biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents 'Biblioteca de Web Components do GOVBR-DS') funciona com versões mais antigas.

Para saber mais detalhes sobre Web Components sugerimos que consulte o [MDN](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components 'Web Components | MDN').

## Dependências

As principais dependências do projeto são:

1. [GOVBR-DS](https://www.gov.br/ds/ 'GOVBR-DS')

1. [Web Components](https://gov.br/ds/webcomponents/ "Web Components GOVBR-DS")

1. [Font Awesome](https://fontawesome.com/ 'Font Awesome')

1. [Fonte Rawline](https://www.cdnfonts.com/rawline.font/ 'Fonte Rawline')

1. [Angular](https://angular.io/guide/setup-local 'Angular')

> O fontawesome e a fonte rawline podem ser importadas de um CDN. Consulte a documentação no site do [GOVBR-DS](https://www.gov.br/ds/ 'GOVBR-DS') para mais detalhes.

## Como executar o projeto?

```sh
git clone git@gitlab.com:govbr-ds/dev/wbc/govbr-ds-wbc-quickstart-angular.git

npm install

npm run serve
```

Após isso o projeto vai estar disponível no endereço `http://localhost:4200/`.

OBS: Para contribuir com o projeto o clone pode não ser a maneira correta. Por favor consulte nossos guias sobre como contribuir na nossa [wiki](https://govbr-ds.gitlab.io/govbr-ds-wiki/ 'Wiki').

### Explicando

Para usar os Web Components GOVBR-DS com o Angular é preciso seguir os seguintes passos:

#### Configure o arquivo `angular.json`

Inclua as referências a biblioteca de Web Components e ao GOVBR-DS

```json
    "styles": [
      ...,
      "node_modules/@govbr-ds/core/dist/core.min.css",
      ...
    ],
    "scripts": [
      ...,
      "node_modules/@govbr-ds/webcomponents/dist/webcomponents.umd.min.js",
      ...
    ]
```

#### Inclua as dependências no index.html

Inclua no index.html aplicação as seguintes dependências:

```html
<link
    rel="stylesheet"
    href="https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css"
/>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
/>
```

#### Adicione o suporte aos Web Components

##### app.module.ts

-   Importe o `CUSTOM_ELEMENTS_SCHEMA` de `@angular/core`.

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
```

-   Adicione os `schemas` e inclua o `CUSTOM_ELEMENTS_SCHEMA`.

```typescript
schemas: [CUSTOM_ELEMENTS_SCHEMA]
```

-   O código final deve ficar como abaixo:

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA, // Informa ao Angular para aceitar elementos customizados
    ],
})
export class AppModule {}
```

Agora os elementos customizados e importados da [biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents 'Biblioteca de Web Components do GOVBR-DS') podem ser usados conforme suas documentações.

## Precisa de ajuda?

> Por favor **não** crie issues para fazer perguntas...

Use nossos canais abaixo para obter tirar suas dúvidas:

-   Site do GOVBR-DS <https://www.gov.br/ds/>

-   Web Components <https://gov.br/ds/webcomponents>

-   Pelo nosso email <govbr-ds@serpro.gov.br>

-   Usando nosso canal no discord <https://discord.gg/U5GwPfqhUP>

## Como contribuir?

Por favor verifique nossos guias de [como contribuir](./CONTRIBUTING.md 'Como contribuir?').

### Commits

Nesse projeto usamos um padrão para branches e commits. Por favor observe a documentação na nossa [wiki](https://govbr-ds.gitlab.io/govbr-ds-wiki/ 'Wiki') para aprender sobre os nossos padrões.

## Créditos

Os Web Components do GOVBR-DS são criados pelo [SERPRO](https://www.serpro.gov.br/ 'SERPRO | Serviço Federal de Processamento de Dados') e [Dataprev](https://www.dataprev.gov.br/ 'Dataprev | Empresa de Tecnologia e Informações da Previdência') juntamente com a participação da comunidade.

## Licença

Nesse projeto usamos a licença MIT.
