import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/info-card/components/header/header.component';
import { LinksComponent } from './components/info-card/components/links/links.component';
import { ButtonComponent } from './components/button/button.component';
import { NavigationSidebarComponent } from './components/navigation-sidebar/navigation-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SpecializationsComponent } from './components/specializations/specializations.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChipComponent } from './components/chip/chip.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { LoadingRipplesComponent } from './ui-ux/loading-ripples/loading-ripples.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { EducationService } from './shared/services/education.service';
import { ExperienceService } from './shared/services/experience.service';
import { ProjectService } from './shared/services/project.service';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InfoCardComponent,
    ContentComponent,
    HeaderComponent,
    LinksComponent,
    ButtonComponent,
    NavigationSidebarComponent,
    ResumeComponent,
    SkillsComponent,
    SpecializationsComponent,
    ProjectsComponent,
    IntroductionComponent,
    ContactComponent,
    ChipComponent,
    EducationComponent,
    SkillComponent,
    LoadingRipplesComponent,
    TruncatePipe,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    EducationService,
    ExperienceService,
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
