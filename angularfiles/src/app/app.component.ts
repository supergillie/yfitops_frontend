import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfiles';
  public images: any = [];
  constructor(private fileService: FileService){}
  ngOnInit(){
    this.fileService.getImages().subscribe(response => {
      this.images = response;
    });
  }

}
