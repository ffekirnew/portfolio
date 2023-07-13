import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import { ContentComponent } from './components/content/content.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    // Redirect to home
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '', component: HomePageComponent, children: [
        {path: 'home', component: ContentComponent},
        {path: 'contact', component: ContactComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
