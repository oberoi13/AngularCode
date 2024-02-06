import { Component } from '@angular/core';
import { Final } from './oberoikiclass';
import { exam } from './oberoikiinterface';
import final from '../assets/data/finalExam.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oberoikifinal';
  oberoikiPersonal:Final={oberoikiFull:"Kiret Oberoi",ID991674132:991674132,oberoikiEmail:"oberoiki@sheridancollege.ca"}
oberoikiJSON:exam[]=final.Material;
}
