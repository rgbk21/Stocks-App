// Imports Angular dependencies that are needed
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Imports the App Component

@NgModule({ // Uses the NgModule annotation to define a module by passing an object
  declarations: [ // Declarations are to list any components and directives used in the app
    AppComponent
  ],
  imports: [ // Imports are other modules that are used in the app
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Providers are any services that are used in the app
  bootstrap: [AppComponent] // Bootstrap declares which component to use as the first to bootstrap the application.
})
export class AppModule { } // Exports an empty class that gets annotated with configuration from NgModule
