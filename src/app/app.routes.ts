import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills-page/skills-page').then((m) => m.SkillsPage),
  },
  {
    path: 'certifications',
    loadComponent: () =>
      import('./pages/certifications-page/certifications-page').then((m) => m.CertificationsPage),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page').then((m) => m.ContactPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page').then((m) => m.NotFoundPage),
    pathMatch: 'full',
  },
];
