import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-push-msg';
  message: any = null;

  constructor() {  }

  ngOnInit(): void {
    this.requestPermissions();
    this.listen();
  }

  requestPermissions() {
    const messaging = getMessaging();

    getToken(messaging, { vapidKey: environment.firebase.vapidKey }).then(currentToket => {
      if (currentToket) {
        console.log('we got the token...');
        console.log(currentToket);
      } else {
        console.log('No registration token alailable. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token.', err);
    });

  }

  listen() {
    const messaging = getMessaging();
    
    onMessage(messaging, payload => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }
}
