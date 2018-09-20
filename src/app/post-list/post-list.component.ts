import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Post} from '../models/post';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {PostService} from '../services/post.service';


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    faMinus = faMinus;
    posts: Post[];
    postsSubscription: Subscription;

    constructor(private postService: PostService, private router: Router) {
    }

    ngOnInit() {
        this.postsSubscription = this.postService
            .postsSubject
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts;
                }
            );
        this.postService.emitPosts();
    }

    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }
}
