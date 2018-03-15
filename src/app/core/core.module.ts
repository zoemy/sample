import { NgModule } from '@angular/core';

import { BaseService } from './base.service';
import { MessageBoxService } from './message-box/message-box.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
  
@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule 
  ],
  providers: [AuthService,AuthGuard,MessageBoxService,BaseService] 
})
export class CoreModule { }
