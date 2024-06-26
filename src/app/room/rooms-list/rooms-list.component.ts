import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, OutputEmitterRef, SimpleChanges, input, output } from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';

  @Output() roomSelected = new EventEmitter<RoomList>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
  }  

  selectRoom(room: RoomList) {
    this.roomSelected.emit(room);
  }
}
