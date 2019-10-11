import { Component, Input, Inject } from '@angular/core';
import { LIST_ITEM } from './custom_list.component'

@Component({
  selector: 'json-list-item',
  template: `<pre>{{item | json}}<pre>`
})
export class JsonListItemComponent  {
  constructor(
    @Inject(LIST_ITEM)
    readonly item: { [key: string]: unknown }
  ) { }
}
