import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


import { HTMLService } from 'src/app/Services/html.service';

@Component({
  selector: 'app-dynamic-html',
  templateUrl: './dynamic-html.component.html',
  styleUrls: ['./dynamic-html.component.css']
})
export class DynamicHTMLComponent implements OnInit {
  html: SafeHtml;
  @Input() url = '';
  constructor(private htmlService: HTMLService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.url.length) {
      this.htmlService.getHTMLFromServer(this.url).subscribe(data => {
      this.html = this.sanitizer.bypassSecurityTrustHtml(data);
    });
    } else {
      this.htmlService.getHTML().subscribe(data => {
      this.html = this.sanitizer.bypassSecurityTrustHtml(data);
    });
    }
  }

}
