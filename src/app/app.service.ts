import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  openLink(url: string) {
    window.open(url, "_blank");
  }
}
