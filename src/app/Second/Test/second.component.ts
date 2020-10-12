import {Component,OnInit} from  '@angular/core'
import {Employee} from  '../../employee'

@Component({
selector: 'second-test',
templateUrl : './second.component.html'

})
export class TestComponent implements OnInit 
{ 


    listdata = new Array<Employee>();
   
    ngOnInit(){

        for(var i =0;i<10;i++)
        { 
            
            var  obj1 = new  Employee(101,"Topstech","Surat");

        this.listdata.push(obj1);

        }
      
    }
 title  = "this is tops tech";
 status = false

 

 adddata()
 {
     this.status = true
     alert("Heloo");
 }

} 