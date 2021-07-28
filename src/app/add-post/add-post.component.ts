import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  submitted = false;
  profileForm = new FormGroup({
    titre: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categories: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private psotService: PostService) { }

  ngOnInit(): void {
  }
  addPost() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    this.psotService.addPost(this.profileForm.value)
    this.router.navigate(['/listPost'])
  }
}
