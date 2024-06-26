import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from './message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent {

  @Input() messages: Message[] = [];
  @Input() numOfMessages: number = 0;
  @Output() indexNumber: EventEmitter<number> = new EventEmitter<number>();

  deleteMessage(index: number): void {
    this.indexNumber.emit(index);
  }
}
