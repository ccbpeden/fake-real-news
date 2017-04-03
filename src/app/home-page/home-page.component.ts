import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from './../article.model';
import { ARTICLES } from './../mock-articles';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ArticleService]
})
export class HomePageComponent implements OnInit {
  articles: Article[];

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(){
    this.articles = this.articleService.getArticles();

    console.log(this.articles)
  }

  goToDetailPage(clickedArticle: Article) {
    this.router.navigate(['articles', clickedArticle.id]);
  };

  isTrue(article){
    if(article.real){
      return "truthy";
    } else {
      return "falsey";
    }
  }

}
