import { Component } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent {
  id = "main-navigation";

  menuItems = [
    {
      id: 1,
      icon: "home",
      name: "Página Inicial",
      url: "/",
    },
    {
      id: 2,
      icon: "users-cog",
      name: "Usuário",
      url: "/usuario",
    },
  ];
}
