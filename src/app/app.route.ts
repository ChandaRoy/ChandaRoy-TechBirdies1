import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import { TopicsComponent } from './topics/topic.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{ 
  path: 'contact', 
  component: ContactComponent 
},
{ 
  path: 'topics', 
  component: TopicsComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
