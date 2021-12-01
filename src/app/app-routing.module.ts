import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "resume", component: ResumeComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "contact", component: ContactComponent},
  {path: "services", component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
