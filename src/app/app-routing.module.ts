import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'notes', component: NotesComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent  },
  { path: 'user', component: UserProfileComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
