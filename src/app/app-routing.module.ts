import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { CookiebarComponent } from './cookiebar/cookiebar.component'
import { HomeComponent } from './home/home.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { UserComponent } from './user/user.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'usuarios',
    component: UserComponent,
    data: { breadCrumb: 'Usuários' },
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: { breadCrumb: 'Sign-In' },
  },
  {
    path: 'cookiebar',
    component: CookiebarComponent,
    data: { breadCrumb: 'Cookiebar' },
  },
]

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
