import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    constructor() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyDkpiIr6qrydhdiuq6XUS6fjOnDUdkznlo',
            authDomain: 'angular-exercice-one.firebaseapp.com',
            databaseURL: 'https://angular-exercice-one.firebaseio.com',
            projectId: 'angular-exercice-one',
            storageBucket: '',
            messagingSenderId: '280345201673'
        };
        firebase.initializeApp(config);
    }

}
