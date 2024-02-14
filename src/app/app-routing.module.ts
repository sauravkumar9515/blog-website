import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPostComponent } from './add-post/add-post.component';
// import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';


const routes: Routes = [
  
  {path: '', component:DashboardComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'category', component: SingleCategoryComponent},
  {path: 'post/:id', component: SinglePostComponent},
  {path:'login',component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path:'home',component:HomeComponent},
  {
    path:'addpost',component:AddPostComponent
  },
  // {path:'subscription-form', component:SubscriptionFormComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'term-conditions', component: TermsAndConditionComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
