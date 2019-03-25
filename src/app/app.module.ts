import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DynamicFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
