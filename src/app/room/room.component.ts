import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule,RoomsListComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent implements OnInit{
  
  hideRooms: boolean = true;
  hotelName: string = 'Jardin';
  noOfRooms: number = 12;
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  rooms: Room = {
    totalRooms: 40,
    availableRooms: 10,
    bookedRooms: 20,
  }

  roomList: RoomList[] = []

  constructor () {};

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber : 1,
        roomType : 'Deluxe Room',
        amenities : 'Air Conditioner, Fridge, Dryer',
        price : 40,
        photo : 'img',
        checkInTime : new Date('15-Jun-2024'),
        checkOutTime : new Date('16-Jun-2024')
      },
      {
        roomNumber : 2,
        roomType : 'Deluxe Room',
        amenities : 'Air Conditioner, Fridge, Dryer',
        price : 40,
        photo : 'img',
        checkInTime : new Date('15-Jun-2024'),
        checkOutTime : new Date('16-Jun-2024')
      },
      {
        roomNumber : 3,
        roomType : 'Deluxe Room',
        amenities : 'Air Conditioner, Fridge, Dryer',
        price : 40,
        photo : 'img',
        checkInTime : new Date('15-Jun-2024'),
        checkOutTime : new Date('16-Jun-2024')
      },
    ]
  }
  selectedRoom!: RoomList;
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room : RoomList = {
      roomNumber : 4,
      roomType : 'Deluxe Room',
      amenities : 'Air Conditioner, Fridge, Dryer',
      price : 40,
      photo : 'img',
      checkInTime : new Date('15-Jun-2024'),
      checkOutTime : new Date('16-Jun-2024')
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
