import { Injectable } from '@angular/core';
import { Message } from '../first-component/message-details/message';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  messages: Array<Message> = [];
  insertMessage(message: Message){
    this.messages.push(message);
  }
  deleteMessage(indexNum: number){
    this.messages.splice(indexNum, 1);
  }
  getMessages(){
    return this.messages;
  }
}
