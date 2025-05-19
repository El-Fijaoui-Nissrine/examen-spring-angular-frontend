import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { RouterOutlet ,RouterModule } from '@angular/router';
import { NavbarComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
                               constructor( ){}
                                     ngOnInit():void{

                                  }
  title = 'examen-frontend-web';
}
