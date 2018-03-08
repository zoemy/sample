//#region Imports

import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { TextboxEntry } from './entries/textbox-entry';
import { TextblockEntry } from './entries/textblock-entry';
import { CurrencyEntry } from './entries/currency-entry';
import { BaseEntry } from './entries/base-entry';
import { NumberValidators } from './number.validator';

//#rendegion

@Injectable()
export class EntryControlService {

  //#region Constructor

  constructor() { }
  
  //#endregion
  
  //#region Public Methods

  getValidationMessages(questions: BaseEntry<any>[]) : { [key: string]: { [key: string]: string } } {
    let validationMessages : { [key: string]: { [key: string]: string } } = {};
    questions.forEach(question => {
       validationMessages[question.key] = question.valitationMessages;      
    });
    return validationMessages;
  }

  toFormGroup(entries: BaseEntry<any>[], loadedItem: any = {}) {
    let group: any = {};

    entries.forEach(entry => {
      let validators = this.getValidators(entry);
      group[entry.key] = validators.length > 0 ? new FormControl(entry.value || loadedItem[entry.key] || '', validators)
                                               : new FormControl(entry.value || loadedItem[entry.key] || '');
    });
    return new FormGroup(group);
  }

  updateValues(form: FormGroup, item: any){
    if(item == undefined)
      return;
      for (let control in form.controls) {
        if(form.controls.hasOwnProperty(control)){
          form.patchValue({ [control]: item[control]});
        } 
      } 
  }

  //#endregion

  //#region Private Methods

  private getValidators( entry: BaseEntry<any>): ValidatorFn[] {
      let validators : ValidatorFn[] = [];
      if(entry.required)
          validators.push(Validators.required);   
  
      validators = validators.concat(this.getTextBoxValidators(entry));
      validators = validators.concat(this.getTexBlockValidators(entry));
      validators = validators.concat(this.getCurrencyValidators(entry));      
      return validators;
  }

  private getTextBoxValidators(entry: BaseEntry<any>): ValidatorFn[] {
      let validators : ValidatorFn[] = [];
      if(entry instanceof TextboxEntry)
      {
        if(entry.maxLength != null)
          validators.push(Validators.maxLength(entry.maxLength));
        if(entry.minLength != null)
          validators.push(Validators.minLength(entry.minLength)); 
        if(entry.pattern != null)
          validators.push(Validators.pattern(entry.pattern)); 
      }
      return validators; 
  }

  private getTexBlockValidators(entry: BaseEntry<any>): ValidatorFn[] {
      let validators : ValidatorFn[] = [];
      if(entry instanceof TextblockEntry)
      {
        if(entry.maxLength != null)
          validators.push(Validators.maxLength(entry.maxLength));
        if(entry.minLength != null)
          validators.push(Validators.minLength(entry.minLength));  
      }
      return validators; 
  }

   private getCurrencyValidators(entry: BaseEntry<any>): ValidatorFn[] {
      let validators : ValidatorFn[] = [];
      if(entry instanceof CurrencyEntry)
      {
        if(entry.min != null && entry.max != null)
          validators.push(NumberValidators.range(entry.min, entry.max));       
      }
      return validators; 
   }

   //#endregion

}              