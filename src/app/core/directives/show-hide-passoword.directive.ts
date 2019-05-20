import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[showHidePassoword]'
})
export class ShowHidePassowordDirective {

  constructor(private el: ElementRef) {
    this.setup()
   }


  toggle(){

  }

  setup(){
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = 'show password';
    parent.appendChild(span)
    console.log(parent, 'parent');
    
  }

}
