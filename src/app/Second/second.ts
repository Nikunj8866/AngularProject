import {NgModule} from  '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {TestComponent} from  '../Second/Test/second.component'
import {HiComponent} from '../Second/hi/hi.component'
import {AddInfoComponent} from  '../Second/add-info/add-info.component'
import {FormsModule} from '@angular/forms';

@NgModule({
 declarations:[TestComponent,HiComponent,AddInfoComponent],
 imports:[BrowserModule,FormsModule],
 exports:[],
 bootstrap : [TestComponent]


})
export class Second{}