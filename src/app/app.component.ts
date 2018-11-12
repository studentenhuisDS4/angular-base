import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MessagingService } from './services/shared/messaging.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentMessage = new BehaviorSubject(null);
  message: string;
  uid: any;
  token: any;

  constructor(public auth: AuthService,
    private messagingService: MessagingService,
    private afs: AngularFirestore,
    private angularFireMessaging: AngularFireMessaging) {
  }

  async ngOnInit() {
    this.uid = this.auth.user$["uid"];
    this.messagingService.requestPermission(this.uid);
    this.receiveMessage();
  }

  updateToken() {
    this.token = this.messagingService.token;
    console.log(this.token);
  }

  getTopics(topic: string) {
    // this.messagingService.
    this.angularFireMessaging.messaging.subscribe
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("Message received", payload);
        this.currentMessage.next(payload);
        this.message = this.currentMessage.getValue().notification.title;
        console.log(this.message);
      })
  }
}
