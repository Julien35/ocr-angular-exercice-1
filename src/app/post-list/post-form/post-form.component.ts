import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

    postForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private postService: PostService,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder
            .group({
                title: ['', Validators.required],
                content: ['', Validators.required]
            });
    }

    onSavePost() {
        const title = this.postForm.get('title').value;
        const content = this.postForm.get('content').value;
        const newPost = new Post(title, content, 0);
        this.postService.createNewPost(newPost);
        this.router.navigate(['/posts']);
    }

}
