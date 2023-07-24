import { Component } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public id: string = 'main-navigation'

  public menuItems: MenuItem[] = [
    {
      id: 1,
      icon: 'home',
      name: 'Página Inicial',
      url: '/',
      // isSpaLinkBehavior: true,
    },
    {
      id: 2,
      icon: 'users-cog',
      name: 'Usuários',
      url: '/usuarios',
      // isSpaLinkBehavior: true,
    },
    {
      id: 3,
      icon: 'sign-in-alt',
      name: 'Sign-In',
      url: '/sign-in',
      // isSpaLinkBehavior: true,
    },
    {
      id: 4,
      icon: 'cookie',
      name: 'Cookiebar',
      url: '/cookiebar',
      // isSpaLinkBehavior: true,
    },
  ]
}

interface MenuItem {
  id: number
  icon: string
  name: string
  url: string
  // isSpaLinkBehavior: boolean
}
