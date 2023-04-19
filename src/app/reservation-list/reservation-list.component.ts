import { Component } from '@angular/core';
import { Reservation } from '../_models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations: Reservation[] = [
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
    {name: 'Gerardo Almaguer',email:'gerardo.almaguer@u-erre.mx', phone:'128318123',people:4,reservationDate:new Date('2023-04-20T06:00:00:000Z')},
  ];

  displayedColumns: string[] = [
    'reservationDate',
    'people',
    'name',
    'email',
    'phone',
    'actions',
  ];

  editButtonClicked(){
    alert('Boton de edicion activado');
  }

  deleteButtonClicked(){
    alert('Boton de borrado activado');
  }
}
