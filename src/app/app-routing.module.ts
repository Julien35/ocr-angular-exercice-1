import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostFormComponent} from './post-list/post-form/post-form.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
    {path: 'auth/signup', component: SignupComponent},
    {path: 'auth/signin', component: SigninComponent},
    {path: 'posts', canActivate: [AuthGuardService], component: PostListComponent},
    {path: 'posts/new', canActivate: [AuthGuardService], component: PostFormComponent},
    {path: '', redirectTo: 'posts', pathMatch: 'full'},
    {path: '**', redirectTo: 'posts'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
