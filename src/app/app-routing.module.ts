import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
const routes: Routes = [
  {
    path: 'listPost',
    component:ListPostComponent
  },
  {
    path: 'addPost',
    component:AddPostComponent
  },
  {
    path: 'UpdatePost/:index',
    component:UpdatePostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
