import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navLinks = [
    { path: '', label: 'Home', exact: true },
    { path: 'about', label: 'About', exact: false },
    { path: 'skills', label: 'Skills', exact: false },
    { path: 'certifications', label: 'Certifications', exact: false },
    { path: 'projects', label: 'Projects', exact: false },
    { path: 'contact', label: 'Contact', exact: false },
  ];
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  isCollapsed: boolean = true; // track menu state

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  collapseNavbar() {
    const navbar: HTMLElement = this.navbarCollapse.nativeElement;
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
      this.isCollapsed = true; // reset state
    }
  }
}
