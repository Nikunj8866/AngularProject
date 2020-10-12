import {NgModule} from  '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {TestComponent} from  '../Second/Test/second.component'
import {HiComponent} from '../Second/hi/hi.component'
@NgModule({
 declarations:[TestComponent,HiComponent],
 imports:[BrowserModule],
 exports:[],
 bootstrap : [TestComponent]


})
export class Second{}