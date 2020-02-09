import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="bg-green-500 p-3 text-center text-white text-2xl">
                  This is irimescu.com
            </div>
            <br />
            <i class="fa fa-shopping-cart fa-3x p-8"></i>
            <br />
            <button class="btn">Test Button</button>`
})
export class AppComponent {
  title = 'irimescu.com';
}
