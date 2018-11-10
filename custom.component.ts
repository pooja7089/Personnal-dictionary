import {Component,OnInit} from '@angular/core';

//decorator
@Component({
    selector: 'app-root',
    templateUrl: './custom.component.html',
   styleUrls: ['./custom.component.css']
})
//simple class
export class WordsSearch implements OnInit {
    name:string;
    dicData:any;
    //declare a dummy variable here
    public allWords = {
    {
        {
            "WordId";"1";
            "lastModified" ;"Wed Apr 15 2017 00:00:00 GMT+0500";
            "created";"Wed Apr 15 2017 00:00:00 GMT+0500";
            "tags"; [];
            "authors";"Admin";
            "category";"definition";
            "isPublished";true;
            "views";0;
            "bodyHtml";"this is search body";
            "decription";"this is search i description";
            "title";"This is search";
        };
    
    Constructor():{};
         console.log("Search component constructor called");
       //Component properties

   //Create ngOnInit() and load words
   ngOnInit: ()=> {
    this.wordsServices.getDictionaryData(this.name).subscribe (
    //calling the function to get words id

    data => {

        this.dictionaryData = data;
        //geting words the words id 
        console.log(this.dictionaryData);
        } ,

    error => {
        console.log("some error occcured");
        console.log(error.errorMessage);

     //end get error information function//

}
    

