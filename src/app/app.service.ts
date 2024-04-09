import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  displayMode = 'bright';

  constructor() { }

  openLink(url: string) {
    window.open(url, "_blank");
  }
}
