import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { CookiebarComponent } from './cookiebar/cookiebar.component'
import { CustomValueAccessorDirective } from './directives/CustomValueAccessor.directives'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { MenuComponent } from './menu/menu.component'
import { MessageComponent } from './message/message.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    CookiebarComponent,
    CustomValueAccessorDirective,
    BreadcrumbComponent,
    FooterComponent,
    UserComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MessageComponent,
    SignInComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
