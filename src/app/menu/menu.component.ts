import { Component } from '@angular/core';
import { Menu } from '../_models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuList: Menu[] = [
    {
      title: 'Ensalada Cesar',
      image: '../../assets/menu/ensalada.jpg',
      description:
        '100g de pechuga de pollo - 100g lechuga romana - pedazos de pan frito - aceitunas negras - aderezo',
    },
    {
      title: 'Pizza',
      image: '../../assets/menu/pizza.jpg',
      description:
        'Queso Mozzarella, Albaca, Salsa Marinara, Tomates Rostizados',
    },
    {
      title: 'Pasta Alfredo',
      image: '../../assets/menu/pasta.jpg',
      description: '100g de pasta, Pollo, Queso Parmesano, Salsa Alfredo',
    },
  ];
}
