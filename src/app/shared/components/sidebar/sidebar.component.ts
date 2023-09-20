import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      #sidebar {
        height: 100vh;
        width: 150px;
      }
    `,
  ],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
