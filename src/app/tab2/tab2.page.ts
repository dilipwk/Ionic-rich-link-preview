import { Component,OnInit,Input,OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {Title} from '@angular/platform-browser';
import {Link} from 'ngx-linkifyjs';
import {LinkPreview, MatLinkPreviewService} from '@angular-material-extensions/link-preview';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy  {
  @Input() link: Link;
  @Input() linkPreview: LinkPreview;
  private _subscription: Subscription;
  textValue:any = 'www.google.com';
  loaded: boolean;
  hasError: boolean;

  constructor(private titleService: Title,
    public linkPreviewService: MatLinkPreviewService) {}

    ngOnDestroy(): void {
      if (this._subscription) {
        this._subscription.unsubscribe();
      }
    }

    ngOnInit(): void {
      if (this.link ) {
        // this.loaded = false;
        this._subscription = this.linkPreviewService
          .fetchLink(this.link.href)
          .subscribe(value => this.linkPreview = value,
            error => this.hasError = true,
            () => this.loaded = true);
      }
    
}

}
