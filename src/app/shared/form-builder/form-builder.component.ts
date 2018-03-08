
import { Component, Input, OnInit, Injector, AfterViewInit, ViewChildren, ElementRef  }  from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';
import { BaseEntry } from './entries/base-entry';
import { EntryControlService } from './entry-control.service';
import { Observable } from 'rxjs/Observable';
import { GenericValidator } from './validator/generic-validator';
import { EmitterService, EmmitterConstants, MessageBoxService  } from '../../core/core-services';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  //#region Properties
  
  @Input() title: string;
  @Input() entries: BaseEntry<any>[] = [];
  @Input() path: string;
  private loadedItem: any;

  displayMessage: { [key: string]: string } = {};
  form: FormGroup;
  private genericValidator: GenericValidator;
  
  //#endregion

  //#region Constructor
  
  constructor(private entryControlService: EntryControlService,        
              private emitterService: EmitterService, 
              private messageBoxService: MessageBoxService) { }

  //#endregion

  //#region Life Cicle Events

  ngOnInit() {
    let validationMessages = this.entryControlService.getValidationMessages(this.entries);
    this.genericValidator = new GenericValidator(validationMessages);
    this.form = this.entryControlService.toFormGroup(this.entries);
    this.onItemLoaded();    
  }

  ngAfterViewInit(): void {
      let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

      Observable.merge(this.form.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.form);
     });     
  }

  //#endregion

  //#region Public Methods

   onSubmit(): void { 
      if (this.form.dirty && this.form.valid) { 
          this.save();
      }
  } 

  //#endregion
  
  //#region Private Methods

  private save(): void {
     this.emitterService.get(EmmitterConstants.FORM_SAVED).emit(this.form.value);        
  }
 
  private onItemLoaded(): void {    
     this.emitterService.get(EmmitterConstants.ITEM_LOADED).subscribe(response => {         
         this.loadedItem = response;
         this.entryControlService.updateValues(this.form, this.loadedItem);
     });
  }

  //#endregion

}