import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  displayMode = 'dark';

  constructor() { }

  openLink(url: string) {
    window.open(url, "_blank");
  }
}
