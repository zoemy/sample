import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material'; 
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MessageBoxService {

  autoHideTimeout : number; 
  actionConfirmButtonLabel: string; 
  errorMessageClassName: string;
  successMessageClassName: string;

  constructor(private snackBar: MatSnackBar) { 
    this.autoHideTimeout =  10000;
    this.actionConfirmButtonLabel = 'Yes'; 
    this.errorMessageClassName = "success-message";
    this.successMessageClassName = "error-message";
  }

  confirm(message: string, className: string = null) : Observable<void>{
    let config = new MatSnackBarConfig();
    config.duration =  this.autoHideTimeout;
    if(className != null)
       config.extraClasses = [className];
    let snackBarRef = this.snackBar.open(message, this.actionConfirmButtonLabel, config);
    return snackBarRef.onAction();
  }

  showMessage(message: string, className: string = null) : void {
    let config = new MatSnackBarConfig();
    config.duration =  this.autoHideTimeout;
    if(className != null)
        config.extraClasses = [className];
    this.snackBar.open(message, null, config);
  }

  showErrorMessage(message: string) : void {
     this.showMessage(message, this.successMessageClassName); 
  }

  showSuccessMessage(message: string) : void {
      this.showMessage(message, this.errorMessageClassName); 
  }

}
