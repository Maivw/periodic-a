import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="header">
  <img
    src="https://res.cloudinary.com/maivw/image/upload/v1612802724/image_zgu7h2.png"
    alt="logo"  class="header__logoImage">
    <div class="header__userAccount">
      <img
        src="https://res.cloudinary.com/maivw/image/upload/v1612802714/ededede_swga4l.png"
        alt="account"
        class="header__userImage"
      />
      <p>User</p>
		</div>
</div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
