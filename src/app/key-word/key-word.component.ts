import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-key-word',
  templateUrl: './key-word.component.html',
  styleUrls: ['./key-word.component.scss']
})
export class KeyWordComponent {

  @Input() keywords: string[];

  constructor(public appService: AppService) {}

}
