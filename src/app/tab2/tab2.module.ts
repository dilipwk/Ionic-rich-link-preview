import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { MatLinkPreviewModule } from '@angular-material-extensions/link-preview';
import {MatInputModule,MatCardModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MarkdownModule.forChild(),
    MatLinkPreviewModule.forRoot(),
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
