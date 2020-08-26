import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Список пользователей';
  typesOfShoes: string[] = ['Smith', 'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
