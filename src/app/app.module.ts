// Imports Angular dependencies that are needed
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// CLI doesn’t automatically register the Stocks service with the App module,
// and we need to register HttpClient with the application as well.
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Imports the App Component

@NgModule({ // Uses the NgModule annotation to define a module by passing an object
  declarations: [ // Declarations are to list any components and directives used in the app
    AppComponent
  ],
  // The import statements on line 7,8 will import the Stocks service and HttpClientModule into the file,
  // but we need to register the HttpClientModule with the application.
  imports: [ // Imports are other modules that are used in the app
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // we need to register the new StocksService with the providers property to
  // inform Angular that it should be made available for the module to use
  providers: [StocksService], // Providers are any services that are used in the app
  bootstrap: [AppComponent] // Bootstrap declares which component to use as the first to bootstrap the application.
})
export class AppModule { } // Exports an empty class that gets annotated with configuration from NgModule
