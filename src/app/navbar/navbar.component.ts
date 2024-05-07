import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {  ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private router: Router) { }

  onSearch(searchTerm: string) {
    // Guardar el término de búsqueda en el localStorage
    localStorage.setItem('searchTerm', searchTerm);

    // Redirigir al usuario al componente de búsqueda
    this.router.navigate(['/search']);
  }
}
