import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  selectedPartner: any;
  registartions: any;

  constructor(private ArticleService: PostService) { }

  ngOnInit(): void {
    this.registartions = this.ArticleService.getAllPosts();
  }

  onDelete(i: number) {
    //with Services
    this.ArticleService.deletePost(i);
    this.ngOnInit(); // first way
  }

}
