import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Welcome {{name}}!<br />Have a good time in {{city}}!</h2>`
})
export class HelloComponent  {
  @Input()
  name: string;

  @Input()
  city: string;
}
