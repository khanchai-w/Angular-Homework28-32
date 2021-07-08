import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  req: string;
  posts: any[];
  comments: any[];
  albums: any[];
  photos: any[];
  todos: any[];
  users: any[];

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.posts=[];
    this.comments=[];
    this.albums=[];
    this.photos=[];
    this.todos=[];
    this.users=[];

    /* Get param */
    this.route.params.subscribe(p=>
      {
        this.req = p.req;
      });

    if(this.req == 'posts'){
      /* Get API */
      this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(result => {
          this.posts = result as any[];
      });
    }else if(this.req == 'comments'){
      /* Get API */
      this.httpClient
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe(result => {
          this.comments = result as any[];
      });
    }else if(this.req == 'albums'){
      /* Get API */
      this.httpClient
      .get('https://jsonplaceholder.typicode.com/albums')
      .subscribe(result => {
          this.albums = result as any[];
      });
    }else if(this.req == 'photos'){
      /* Get API */
      this.httpClient
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(result => {
          this.photos = result as any[];
      });
    }else if(this.req == 'todos'){
      /* Get API */
      this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(result => {
          this.todos = result as any[];
      });
    }else if(this.req == 'users'){
      /* Get API */
      this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(result => {
          this.users = result as any[];
      });
    }else{
      this.posts=[];
      this.comments=[];
      this.albums=[];
      this.photos=[];
      this.todos=[];
      this.users=[];
    }

  }

}
