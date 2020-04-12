import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

 import { EditorModule } from '@tinymce/tinymce-angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.route';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TopicsComponent } from './topics/topic.component';

//Admin
import { CreateTopicComponent } from './Admin/createTopic/createTopic.component';
import { CreateSubjectComponent } from './Admin/createSubject/createSubject.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    TopicsComponent,
    CreateTopicComponent,
    CreateSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    FormsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
