import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="bg-success p-2 text-center text-white">
                  This is irimescu.com
            </div>
            <br />
            <i class="fa fa-shopping-cart"></i>
            <br />
            <button class="btn btn-primary">Test Button</button>`
})
export class AppComponent {
  title = 'irimescu.com';
}
