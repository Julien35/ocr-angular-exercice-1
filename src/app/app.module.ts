import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list/post-list-item/post-list-item.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PostService} from './services/post.service';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent,
        HeaderComponent,
        PostFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule,
        FontAwesomeModule
    ],
    providers: [
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
