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
  message: any;
  uid: any;
  token: any;

  constructor(public auth: AuthService,
    private messagingService: MessagingService,
    private afs: AngularFirestore) {
  }

  async ngOnInit() {
    this.uid = this.auth.user$["uid"];
    console.log(this.uid);
    this.messagingService.requestPermission(this.uid);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
    console.log(this.message);
  }
}
