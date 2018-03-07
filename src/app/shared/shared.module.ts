import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatterDirective } from './currency-formatter.directive';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrencyFormatterDirective, CurrencyPipe]
})
export class SharedModule { }
