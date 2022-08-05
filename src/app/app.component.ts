import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp1';
  pattern = { 0: { pattern: new RegExp('[0-9]'), symbol: String.fromCodePoint(9679) } ,
  'X': {pattern: new RegExp('[0-9]')},
};
  hidden = false;
  ssn = ''

  unhide(){
    this.hidden = !this.hidden;
    
  }
}
