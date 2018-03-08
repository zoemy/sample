import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatterDirective } from './directive/currency-formatter.directive';
import { CurrencyPipe } from './pipe/currency.pipe';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormEntryComponent } from './form-builder/form-entry/form-entry.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrencyFormatterDirective, CurrencyPipe, FormBuilderComponent, 
                 FormEntryComponent, ModalComponent]
})
export class SharedModule { }
