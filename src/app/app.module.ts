import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { CookiebarComponent } from "./cookiebar/cookiebar.component";
import { CustomValueAccessor } from "./directives/CustomValueAccessor.directives";
import { FooterComponent } from "./footer/footer.component";
import { FormularioComponent } from "./formularios/formulario.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { InputComponent } from "./input/input.component";
import { MenuComponent } from "./menu/menu.component";
import { MessageComponent } from "./message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CookiebarComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    InputComponent,
    CustomValueAccessor,
    FormularioComponent,
    HomeComponent,
    MessageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
