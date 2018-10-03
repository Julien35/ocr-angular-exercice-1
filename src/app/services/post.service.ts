import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    postsSubject = new Subject<Post[]>();

    private posts: Post[] = [
        new Post('Mon premier post',
            'Et prima post Osdroenam quam, ut dictum est, ' +
            'ab hac descriptione discrevimus, Commagena, nunc Euphratensis',
            4),

        new Post('Mon deuxième post',
            'Et prima post Osdroenam quam, ut dictum est, ' +
            'ab hac descriptione discrevimus, Commagena, nunc Euphratensis',
            0),

        new Post('Mon troisième post',
            'Et prima post Osdroenam quam, ut dictum est, ' +
            'ab hac descriptione discrevimus, Commagena, nunc Euphratensis',
            -4)
    ];

    constructor() {
        this.getPosts();
    }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    changeLike(post: Post) {
        const postIndex = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts[postIndex] = post;
        this.savePosts();
        this.emitPosts();
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

    getPosts() {
        this.emitPosts();
    }

    savePosts() {
        // save on firebase
    }
}
