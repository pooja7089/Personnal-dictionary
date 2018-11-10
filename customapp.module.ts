
import { BrowserModule } from '@angular/platform-browser';
import {NgModule}  from '@angular/core';
import {HttpModule} from '@angular/http' ;
import {RouterModule} from '@angular/router';
import { AppComponent } from '@angular/AppComponent';
//custom component
import  {CustomComponent} from './search/search.component';
import {ReactiveFormModule} from './FormModule'
import {SearchServices} from  '@angular/search';
//decorators
@NgModule({
    declarations: [
        AppComponent,
        CustomComponent
    ], //declare the appComponent

    imports: [
        BrowserModule,
        ReactiveFormModule,
        //to declare the possible routes in application
        NgModule,
        //httpModule method to declare the possible http in application
        HttpModule,
        RouterModule.forRoot(), {

    
    providers:[SearchServices],
    bootstrap:[AppComponent] //provides the AppComponent in bootstrap
})

// empty object
export class AppModule{ 

};


