import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListPokemonComponent], // ✅ Import Components ที่ต้องการใช้
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
}
