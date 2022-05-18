import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './components/tag/tag.component';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    TagComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
