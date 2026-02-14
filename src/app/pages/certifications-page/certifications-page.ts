import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications-page.html',
  styleUrls: ['./certifications-page.css'],
})
export class CertificationsPage {
  //All Certfications Information
  certifications = [
    {
      title: 'Git & GitHub - The Practical Guide',
      image: 'assets/certificates/Git & GitHub - The Practical Guide-Certificate.jpg',
      link: 'https://www.udemy.com/certificate/UC-e33300fd-fa14-4b93-94f4-5ece8e09bb02/',
    },
    {
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      image:
        'assets/certificates/Build Responsive Real-World Websites with HTML and CSS-Certificate.jpg',
      link: 'https://www.udemy.com/certificate/UC-6eda981d-4f51-4eac-8873-30c4ec5e1ac9/',
    },
    {
      title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
      image:
        'assets/certificates/The Complete JavaScript Course 2025 From Zero to Expert-Certifcate.jpg',
      link: 'https://www.udemy.com/certificate/UC-cfb1951e-e09a-4a70-bd84-b907cbea11da/',
    },
    {
      title: 'The Complete jQuery Course: From Beginner To Advanced!',
      image:
        'assets/certificates/The Complete jQuery Course From Beginner To Advanced-Certifcate.jpg',
      link: 'https://www.udemy.com/certificate/UC-f788079e-d0a3-4324-8d5f-c8e936a1c9ea/',
    },
    {
      title: 'The Ultimate Bootstrap Guide - Bootstrap 5 from Scratch',
      image:
        'assets/certificates/The Ultimate Bootstrap Guide - Bootstrap 5 from Scratch-Certificate.jpg',
      link: 'https://www.udemy.com/certificate/UC-4826e99c-2175-479a-8316-f19d36f3779d/',
    },
    {
      title: 'Angular - The Complete Guide',
      image: 'assets/certificates/Angular - The Complete Guide-Certificate.jpg',
      link: 'https://www.udemy.com/certificate/UC-7d776773-247a-42cc-837f-43006b614da8/',
    },
    {
      title: `SQL - The Complete Developer's Guide (MySQL, PostgreSQL)`,
      image: `assets/certificates/SQL - The Complete Developer's Guide (MySQL, PostgreSQL)-Certificate.jpg`,
      link: 'https://www.udemy.com/certificate/UC-010c29b0-f8cd-481f-bd9e-de8f5982255c/',
    },
  ];
}
