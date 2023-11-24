import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, HelloComponent],
  selector: 'app-root',
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
