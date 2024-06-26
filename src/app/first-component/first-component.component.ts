import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { Message } from './message-details/message';
import { FirstService } from '../services/first.service';
@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [FormsModule,CommonModule,MessageDetailsComponent],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  messages: Array<Message> = [];
  private messageService: FirstService = inject(FirstService);

  constructor(){
    this.messages = this.messageService.getMessages();
    
  }
  submitted() {
    this.messageService.insertMessage(
      {
        name: this.name,
        email: this.email,
        message: this.message,
      }
    )
  };

  delete($event: number) {
    this.messageService.deleteMessage($event);
  }

}
