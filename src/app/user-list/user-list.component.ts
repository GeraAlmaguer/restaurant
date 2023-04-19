import { Component } from '@angular/core';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    {username: 'gerardo.almaguer', name: 'Gerardo Almaguer'},
    {username: 'gerardo.almaguer', name: 'Gerardo Almaguer'},
    {username: 'gerardo.almaguer', name: 'Gerardo Almaguer'},
    {username: 'gerardo.almaguer', name: 'Gerardo Almaguer'},
    {username: 'gerardo.almaguer', name: 'Gerardo Almaguer'},
    {username: 'gerardo.almaguer', name: 'Gerardo Almaguer'},
    {username: 'gerardo.almaguer', name: 'Gerardo Almaguer'},
    {username: 'gerardo.almaguer', name: 'Gerardo Almaguer'},
  ];

  displayedColumns: string[] = [
    'username',
    'name',
    'actions',
  ];

  addButtonClicked(){
    alert('Boton de adicion activado');
  }

  deleteButtonClicked(){
    alert('Boton de borrado activado');
  }
}
