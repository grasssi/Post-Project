import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = environment.baseUrl

  constructor() { }
  getAllPosts() {
    return JSON.parse(localStorage.getItem('registration') || '[]');
  }

  deletePost(index: number) {
    const registartions = this.getAllPosts();
    registartions.splice(index, 1);
    localStorage.setItem('registration', JSON.stringify(registartions));
  }
  saveUpdate(index: any, formValue: any) {
    let artcicleData = this.getAllPosts();
    artcicleData.splice(index, 1, formValue);
    //mise a jour de localStorage
    localStorage.setItem('registration', JSON.stringify(artcicleData))
    //apres l'update naviger vers le component Articles
    // this.router.navigate(['/articles'])
  }

  getPostByIndex(index: number) {
    const registartions = this.getAllPosts();
    return (registartions[index])
  }

  addPost(formValue: any) {
    const registartions = this.getAllPosts();
    registartions.push(formValue);
    localStorage.setItem('registration', JSON.stringify(registartions));
  }
}
