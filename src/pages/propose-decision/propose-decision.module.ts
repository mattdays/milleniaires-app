import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProposeDecisionPage } from './propose-decision';

@NgModule({
  declarations: [
    ProposeDecisionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProposeDecisionPage),
  ],
})
export class ProposeDecisionPageModule {}
