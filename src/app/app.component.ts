import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, ProjectsComponent, ContactComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'my-portfolio';

  ngOnInit() {
    AOS.init({
      duration: 1000, // animation එක වෙන්න යන වෙලාව (ms)
      once: true      // එක පාරක් විතරක් animate වෙන්න
    });
  }
}