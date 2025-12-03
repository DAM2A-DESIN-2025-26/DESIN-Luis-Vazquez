import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  //templateUrl: './app.html',
   template: `
    <app-navbar></app-navbar>

    <div style="padding: 20px; border: 2px solid red;">
       <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portalPersonal');
}
