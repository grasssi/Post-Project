import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    titre: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categories: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });
  index: any;
  constructor(private activatetRoute: ActivatedRoute, private router: Router, private ArticleService: PostService) { }

  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    const articleData = this.ArticleService.getPostByIndex(this.index);
    this.profileForm.patchValue(articleData)
    console.log(articleData);
  }
  updatePost() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    this.ArticleService.saveUpdate(this.index, this.profileForm.value);
    this.router.navigate(['/listPost'])
  }
}
