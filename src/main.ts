import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-root',
  template: `
  <a href="https://coryrylan.com/blog/syncing-multiple-reactive-form-inputs-in-angular"><h1>Keeping multiple reactive form controls in sync</h1></a>
  <input placeholder="search 1" [formControl]="search" [value]="search.value" />
  <input placeholder="search 2" [formControl]="search" [value]="search.value" />
  <input placeholder="search 3" [formControl]="search" [value]="search.value" />
`
})
export class App  {
  search = new FormControl('hello');
  subscription = this.search.valueChanges.subscribe(v => console.log(v));

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


bootstrapApplication(App);
