import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamplepagePage } from './examplepage';

@NgModule({
  declarations: [
    ExamplepagePage,
  ],
  imports: [
    IonicPageModule.forChild(ExamplepagePage),
  ],
})
export class ExamplepagePageModule {}
