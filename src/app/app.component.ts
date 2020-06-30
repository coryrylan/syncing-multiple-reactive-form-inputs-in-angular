import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  search = new FormControl('hello');
  subscription = this.search.valueChanges.subscribe(v => console.log(v));

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
