import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';

import { AuFaInputModule } from './lib/au-fa-input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuFaInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ng serve -prod --aot

/**
 * Preparing our component for deployment
 * 
 * 1. We create a module to import au-fa-input component from it.
 * 
 * 2. We have to compile everything with aot flag in order to check if
 *    everything works well.
 *    
 *    AOT gives us smaller package then a faster render in the browser.
 *    See: https://angular.io/guide/aot-compiler
 * 
 * 3. Create an index.ts file at root level of the application. The file
 *    will contain an export statement of the AuFaInputModule.
 *    
 *    The creation of this file gives client apps the ability to import
 *    the library module as following:
 * 
 *    import { AuFaInputModule } from 'au-fa-input';
 * 
 *    Behind the scenes the import statement in clien app will actually read 
 *    the index.ts file.
 */
