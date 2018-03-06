import { NgModule } from '@angular/core'; 
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatSnackBarModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatMenuModule,MatToolbarModule,MatButtonToggleModule,MatTabsModule,
            MatIconModule,MatCardModule,MatSelectModule,MatFormFieldModule,MatSnackBarModule],
  exports: [MatButtonModule,MatMenuModule,MatToolbarModule,MatButtonToggleModule,MatTabsModule,
            MatIconModule,MatCardModule,MatSelectModule,MatFormFieldModule,MatSnackBarModule],
})
export class MaterialModule { }