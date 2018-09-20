import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

    @Input() post: Post;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
    }

    onLoveIts(post: Post) {
        post.loveIts++;
        this.postService.changeLike(post);
    }

    onDontLoveIts(post: Post) {
        post.loveIts--;
        this.postService.changeLike(post);
    }

    onDeletePost(post: Post) {
        this.postService.removePost(post);
    }
}
