# Web Components GOVBR-DS - Quickstart Angular

## Descrição

Projeto exemplificando o uso da [biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents "Biblioteca de Web Components do GOVBR-DS") em projetos [Angular](https://angular.io/ "Angular").

[Visualização ao vivo](https://govbr-ds.gitlab.io/wbc/quickstarts/govbr-ds-wbc-quickstart-angular/main/).

## Tecnologias

Esse projeto é desenvolvido usando:

1. [Biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents "Biblioteca de Web Components do GOVBR-DS")
1. [Angular](https://angular.io/ "Angular")

> Esse projeto foi construído usando uma versão nova do Angular, mas a [Biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents "Biblioteca de Web Components do GOVBR-DS") funciona com versões mais antigas.

Para saber mais detalhes sobre Web Components sugerimos que consulte o [MDN](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components "Web Components | MDN").

## Dependências

As principais dependências do projeto são:

1. [GOVBR-DS](https://www.gov.br/ds/ "GOVBR-DS")

1. [Web Components](https://gov.br/ds/webcomponents/ "Web Components GOVBR-DS")

1. [Font Awesome](https://fontawesome.com/ "Font Awesome")

1. [Fonte Rawline](https://www.cdnfonts.com/rawline.font/ "Fonte Rawline")

1. [Angular](https://angular.io/guide/setup-local "Angular")

> O fontawesome e a fonte rawline podem ser importadas de um CDN. Consulte a documentação no site do [GOVBR-DS](https://www.gov.br/ds/ "GOVBR-DS") para mais detalhes.

## Como executar o projeto?

```sh
git clone git@gitlab.com:govbr-ds/wbc/quickstarts/govbr-ds-wbc-quickstart-angular.git

npm install

npm run serve
```

Após isso o projeto vai estar disponível no endereço `http://localhost:4200/`.

OBS: Para contribuir com o projeto o clone pode não ser a maneira correta. Por favor consulte nossos guias sobre como contribuir na nossa [wiki](https://gov.br/ds/wiki/ "Wiki").

## Explicando

Para usar os Web Components GOVBR-DS com o Angular é preciso seguir os seguintes passos:

## Configure o arquivo `angular.json`

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

## Inclua as dependências no index.html

Inclua no index.html da aplicação as seguintes dependências:

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

## Adicione o suporte aos Web Components

## app.module.ts

-   Importe o `CUSTOM_ELEMENTS_SCHEMA` de `@angular/core`.

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
```

-   Adicione os `schemas` e inclua o `CUSTOM_ELEMENTS_SCHEMA`.

```typescript
schemas: [CUSTOM_ELEMENTS_SCHEMA];
```

-   O código final deve ficar como abaixo:

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

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

Agora os elementos customizados e importados da [biblioteca de Web Components do GOVBR-DS](https://gov.br/ds/webcomponents "Biblioteca de Web Components do GOVBR-DS") podem ser usados conforme suas documentações.

## Integração do ngModel e do FormGroup do Angular com os Web Components

Os Web Components se comunicam por meio de propriedades e eventos personalizados, assim como o Angular. No entanto, se formos utilizar estes Web Components com um formulario Angular, ele não funcionaria muito bem quanto um `Custom Angular Form Control`. Nós não temos como utilizar a validação personalizada ou outras API(s) de formularios do Angular.

Com a implementação de uma diretiva customizada podemos anexar a lógica da API(s) específica do Angular aos nossos Web Components.

Fazendo o uso de diretivas do Angular, podemos aplicar a API de controle de formulário personalizado aos nossos componentes da web.

Para ajudá-lo com essa questão criamos essa diretiva customizada. Não sendo necessária nenhuma implementação da parte que quem vai utilizar.

A diretiva está localizada na pasta `src/app/directives/` com o nome `CustomValueAccessor.directives.ts` ela deve ser incluída no module da sua aplicação. Conforme o exemplo abaixo:

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomValueAccessor } from "./directives/CustomValueAccessor.directives";

@NgModule({
    declarations: [AppComponent, CustomValueAccessor],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AppModule {}
```

Basta seguir os passos acima e poderá utilizar o ngModel e o FormControl em seus campos de formulários. Pois agora os web components do govbr já tem toda a API(s) de controle de formulários do Angular integrada em sua tag.

## Utilizando web components com ngModel

```html
<br-input
  id="input"
  label="Sobrenome"
  [value]="sobrenome"
  type="text"
  [placeholder]="sobrenome"
  [(ngModel)]="sobrenome"
></br-input>
<p>{{ sobrenome }}</p>
```

## Utilizando Web components com Reactive Forms

```html
<br-input
  id="counter"
  label="Counter"
  type="number"
  [formControl]="counter"
  (change)="saveRange($event)"
></br-input>
<p>valor do input: {{ counter.value }}</p>
<p>Valid (min value 0): {{ counter.valid }}</p>
```

## Precisa de ajuda?

> Por favor **não** crie issues para fazer perguntas...

Use nossos canais abaixo para obter tirar suas dúvidas:

-   Site do GOVBR-DS [http://gov.br/ds](http://gov.br/ds)

-   Web Components [https://gov.br/ds/webcomponents/](https://gov.br/ds/webcomponents/)

-   Pelo nosso email [govbr-ds@serpro.gov.br](govbr-ds@serpro.gov.br)

-   Usando nosso canal no discord [https://discord.gg/U5GwPfqhUP](https://discord.gg/U5GwPfqhUP)

## Como contribuir?

Antes de abrir um Merge Request tenha em mente algumas informações:

-   Esse é um projeto opensource e contribuições são bem-vindas.
-   Para facilitar a aprovação da sua contribuição, escolha um título curto, simples e explicativo para o MR, e siga os padrões da nossa [wiki](https://gov.br/ds/wiki/ "Wiki").
-   Quer contribuir com o projeto? Confira o nosso guia [como contribuir](./CONTRIBUTING.md "Como contribuir?").

## Commits

Nesse projeto usamos um padrão para branches e commits. Por favor observe a documentação na nossa [wiki](https://gov.br/ds/wiki/ "Wiki") para aprender sobre os nossos padrões.

## Créditos

Os Web Components do GOVBR-DS são criados pelo [SERPRO](https://www.serpro.gov.br/ "SERPRO | Serviço Federal de Processamento de Dados") e [Dataprev](https://www.dataprev.gov.br/ "Dataprev | Empresa de Tecnologia e Informações da Previdência") juntamente com a participação da comunidade.

## Licença

Nesse projeto usamos a licença MIT.
