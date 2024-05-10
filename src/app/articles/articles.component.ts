import {Component, Input, OnInit} from '@angular/core';
import {Article} from './articles.model'
import {ArticlesService} from "./articles.service";
import {Subscription} from "rxjs";
import {Router, RouterLinkWithHref, RouterModule} from "@angular/router";
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {FloatLabelType, ThemePalette} from "@angular/material/core";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldAppearance, MatFormFieldModule} from '@angular/material/form-field';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less'],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    RouterLinkWithHref,
    NgClass,
    MatInputModule,
    ReactiveFormsModule,
    NgForOf,
    NgIf,
  ],
  standalone: true
})

export class ArticlesComponent implements OnInit{
  articles: Article[] = [];
  value: '' | undefined;
  filteredArticles: any[] | undefined;
  collapsed: boolean = false;
  searchQuery: string = '';

  constructor(protected articlesService: ArticlesService,
              private router: Router, private _formBuilder: FormBuilder) {}


  @Input() article: Article | undefined
  @Input() appearance: MatFormFieldAppearance | undefined
  @Input() color: ThemePalette
  @Input() floatLabel: FloatLabelType | undefined
  @Input() hideRequiredMarker: boolean | undefined
  @Input() hintLabel: string | undefined






  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });



  ngOnInit() {

    this.showArticles();
    this.toggleCollapse();
    this.filterArticles();
    this.resetFilters();
  }

  showArticles() {
    this.articlesService.getArticles().subscribe(data => this.articles = data)
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  filterArticles() {
    this.filteredArticles = this.articles.filter(article =>
      article.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  resetFilters() {
    this.searchQuery = '';
    this.filteredArticles = this.articles;
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  protected readonly ArticlesService = ArticlesService;
  filterGroup = new FormGroup({
    articleName: new FormControl()
  });
}

