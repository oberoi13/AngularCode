import { Component,Input } from '@angular/core';
import { Final } from '../oberoikiclass';

@Component({

  selector: 'app-oberoiki-shared',
  templateUrl: './oberoiki-shared.component.html',
  styleUrls: ['./oberoiki-shared.component.css']
})
export class OberoikiSharedComponent {
@Input() oberoikiChild!: Final;
}
