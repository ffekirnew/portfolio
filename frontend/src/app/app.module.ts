import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
