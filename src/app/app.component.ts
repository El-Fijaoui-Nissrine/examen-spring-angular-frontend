import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { RouterOutlet ,RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ClientComponent } from './client/client.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,RouterModule,ClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
                               constructor( ){}
                                     ngOnInit():void{

                                  }
  title = 'examen-frontend-web';
}
