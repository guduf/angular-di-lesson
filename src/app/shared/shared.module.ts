import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service'
import { CustomListComponent } from './custom_list.component'
import { JsonListComponent } from './json_list.component'
import { JsonListItemComponent } from './json_list_item.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomListComponent,
    JsonListComponent,
    JsonListItemComponent
  ],
  exports: [
    CommonModule,
    JsonListComponent
  ],
  providers: [UserService],
  entryComponents: [
    JsonListItemComponent
  ]
})
export class SharedModule { }
