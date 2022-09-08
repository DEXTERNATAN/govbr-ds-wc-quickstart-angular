import { Component } from "@angular/core";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent {
  links = `[
            {
              id: 1,
              icon: 'bell',
              name: 'Nível 1'
            },
            {
              id: 2,
              icon: 'cubes',
              name: 'Nível 1',
              list: [
                {
                  icon: 'address-book',
                  name: 'Nível 2',
                  list: [
                    {
                      icon: 'tree',
                      name: 'Nível 3',
                      list: [
                        {
                          'icon': 'tree',
                          'name': 'Nível 4',
                          'url': 'javascript:void(0)'
                        },
                        {
                          'icon': 'tree',
                          'name': 'Nível 4'
                        }
                      ]
                    },
                    {
                      icon: 'tree',
                      name: 'Nível 3',
                      url: 'javascript:void(0)'
                    }
                  ]
                },
                {
                  icon: 'heart',
                  name: 'Nível 2',
                  url: 'javascript:void(0)'
                }
              ]
            },
            {
              id: 3,
              icon: 'file-archive',
              name: 'Nível 1'
            }
          ]`;
}
