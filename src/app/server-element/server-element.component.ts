import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() element: {type: string, name: string, content: string};
  // tslint:disable-next-line:no-input-rename
  // @Input('newElement') elem: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called !');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called !');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called !');
    console.log('Text header element onInit : ' + this.header.nativeElement.textContent);
    console.log('Text paragraph element onInit : ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ngDoCheck  called !');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit  called !');
    console.log('Text paragraph element afterContentInit : ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked  called !');
    console.log('Text paragraph element onInit : ' + this.paragraph.nativeElement.textContent);

  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit  called !');
    console.log('Text header element afterViewInit : ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked  called !');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy  called !');
  }
}
