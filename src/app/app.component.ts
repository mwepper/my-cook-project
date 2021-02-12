import {Component} from '@angular/core';
import { HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cook-project';
  allElements = [{type: 'server', name: 'TsetNameServer', content: 'This is a content'}];
  allElementsWithAlias = [{type: 'serverWithAlias', name: 'TsetNameServerWithAlias', content: 'This is a content WithAlias'}];
  loadLink = 'recipe';

  // tslint:disable-next-line:typedef
  onNavigate(link: string){
    this.loadLink = link;
  }
}
