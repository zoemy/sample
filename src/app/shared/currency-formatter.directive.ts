import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { CurrencyPipe } from "../shared/currency.pipe";

@Directive({
  selector: '[currencyFormatter]'
})
export class CurrencyFormatterDirective {

  private el: any;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
     this.el.value = this.currencyPipe.transform(value);
  }
 
  @HostListener("keyup", ["$event.target.value"])
  onkeyup(value) {
     this.el.value = value.replace(/[^0123456789.]/g, "");
  }
}