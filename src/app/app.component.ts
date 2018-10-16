import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MessagingService } from './services/shared/messaging.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message : any;
  user: any;
  token: any;

  constructor(public auth: AuthService, 
    private messagingService: MessagingService,
    private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.user = this.auth.user$["uid"];
    this.messagingService.requestPermission(this.user["uid"]);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
    this.token = this.messagingService.token;
  }
}
