import { Component, OnInit } from '@angular/core';
import {Employee} from '..//../employee'

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {

  constructor() { }
   arrList = new Array<Employee>();

  ngOnInit(): void {
  }

  addval(frm)
  {
    
    var obj = new Employee(frm.value.id,frm.value.name,frm.value.add);
    this.arrList.push(obj);

    
  }
}
