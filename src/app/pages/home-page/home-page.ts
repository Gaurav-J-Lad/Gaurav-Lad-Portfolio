import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {
  // Carousel Slides Information
  slides = [
    {
      title: 'Java Full Stack Developer',
      subtitle: 'Actively Seeking Opportunities',
      description:
        'I am a passionate Java Full Stack Developer, skilled in building scalable web applications. Looking for challenging roles where I can contribute to meaningful projects and grow as a professional.',
      imageClass: 'slide-image-first',
    },

    {
      title: 'Skilled Frontend Developer',
      subtitle: 'Angular | Bootstrap | Responsive Design',
      description:
        'Experienced in creating dynamic, interactive, and responsive web interfaces. Proficient in Angular, Bootstrap, HTML5, CSS3, and modern frontend frameworks.',
      imageClass: 'slide-image-second',
    },

    {
      title: 'Backend Expertise',
      subtitle: 'Java | Spring Boot | Hibernate | Databases',
      description:
        'Strong backend development skills using Java, Spring Boot, Hibernate, Spring Data JPA, REST APIs, and databases like MySQL, PostgreSQL, and MongoDB. Focused on building robust and efficient server-side solutions.',
      imageClass: 'slide-image-third',
    },
  ];

  //All Links
  resumeLink = 'assets/resume/Gaurav_Lad_Resume.pdf';

  githubLink = 'https://github.com/gaurav-j-lad';

  linkedinLink = 'https://www.linkedin.com/in/gaurav-lad1974/';
}
