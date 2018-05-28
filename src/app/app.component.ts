import {Component} from '@angular/core';
import {Post} from './post';
import construct = Reflect.construct;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    posts: Post[];

    constructor() {

        const post1 = new Post('Mon premier post',
            'Et prima post Osdroenam quam, ut dictum est, ' +
            'ab hac descriptione discrevimus, Commagena, nunc Euphratensis',
            4);

        const post2 = new Post('Mon deuxième post',
            'Et prima post Osdroenam quam, ut dictum est, ' +
            'ab hac descriptione discrevimus, Commagena, nunc Euphratensis',
            0);

        const post3 = new Post('Mon troisième post',
            'Et prima post Osdroenam quam, ut dictum est, ' +
            'ab hac descriptione discrevimus, Commagena, nunc Euphratensis',
            -4);

        this.posts = [post1, post2, post3];
    }

}
