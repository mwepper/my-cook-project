import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() linkSelect = new EventEmitter<string>();

  // tslint:disable-next-line:typedef
  onSelect(link: string){
    this.linkSelect.emit(link);
  }

}
