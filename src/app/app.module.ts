import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from './articles/articles.service';
import { ArticlePostComponent } from './article-post/article-post.component';
import { ImpressumComponent } from './impressum-component/impressum-component.component';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { LandingPageComponent } from './features/landing/landing-page.component';
import { SectionWrapperComponent } from './shared/ui/section-wrapper/section-wrapper.component';
import { SkillChipComponent } from './shared/ui/skill-chip/skill-chip.component';
import { ProjectCardComponent } from './shared/ui/project-card/project-card.component';
import { DotNavComponent } from './shared/ui/dot-nav/dot-nav.component';
import { MobileNavComponent } from './shared/ui/mobile-nav/mobile-nav.component';
import { PersonSectionComponent } from './features/person/person-section.component';
import { ProjectsSectionComponent } from './features/projects/projects-section.component';
import { ExperienceSectionComponent } from './features/experience/experience-section.component';
import { ContactSectionComponent } from './features/contact/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlePostComponent,
    ArticlesComponent,
    ImpressumComponent,
    LandingPageComponent,
    SectionWrapperComponent,
    SkillChipComponent,
    ProjectCardComponent,
    DotNavComponent,
    MobileNavComponent,
    PersonSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    NgOptimizedImage,
    FormsModule,
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
