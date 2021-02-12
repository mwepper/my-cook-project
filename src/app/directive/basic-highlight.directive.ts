import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-color', 'blue');
  }

}
