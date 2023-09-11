import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import { ContentComponent } from './components/content/content.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectPageComponent } from './pages/project/project-page/project-page.component';

const routes: Routes = [
    // Redirect to home
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'project/:id', component: ProjectPageComponent},
    {path: '', component: HomePageComponent, children: [
        {path: 'about', component: ContentComponent},
        {path: 'contact', component: ContactComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
