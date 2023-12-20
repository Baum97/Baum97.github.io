import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleArrayComponent } from './article-array.component';

describe('ArticleArrayComponent', () => {
  let component: ArticleArrayComponent;
  let fixture: ComponentFixture<ArticleArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
