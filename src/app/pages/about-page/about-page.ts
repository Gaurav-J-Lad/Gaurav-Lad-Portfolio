import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.html',
  styleUrls: ['./about-page.css'],
})
export class AboutPage {
  // About paragraphs
  aboutTexts: string[] = [
    `Hi! <b>I'm Gaurav Lad</b>, a passionate <b>Full Stack Java Developer</b> with expertise in both backend and frontend technologies. I enjoy building scalable, interactive web applications using <b>Java, Spring Boot, Hibernate, Spring Data JPA</b> on the backend and <b>Angular, Bootstrap, and responsive web design</b> on the frontend.`,

    `My goal is to develop complete web solutions, combining backend robustness with frontend usability. I am skilled in <b>REST APIs, SQL & NoSQL databases (MySQL, PostgreSQL, MongoDB), Git & GitHub</b>, and modern development tools, enabling me to contribute effectively to both frontend, backend, and full-stack projects.`,

    `I am actively seeking opportunities for <b>Backend, Frontend, or Full Stack Developer</b> roles where I can apply my skills in Java-based technologies and modern web frameworks while continuing to grow as a versatile developer.`,
  ];

  // Education list
  educationList = [
    {
      degree: 'M.Sc. Information Technology',
      college: 'M.L. Dahanukar College, Mumbai',
      year: '2024',
      score: 'CGPI: 8.02/10',
    },
    {
      degree: 'B.Sc. Information Technology',
      college: 'M.L. Dahanukar College, Mumbai',
      year: '2022',
      score: 'CGPI: 8.22/10',
    },
    {
      degree: 'HSC',
      college: 'Mithibai College, Mumbai',
      year: '2019',
      score: 'Percentage: 56%',
    },
    {
      degree: 'SSC',
      college: 'Bombay Cambridge School, Mumbai',
      year: '2017',
      score: 'Percentage: 74%',
    },
  ];

  skills = [
    'HTML5',
    'CSS3',
    'JavaScript & TypeScript',
    'jQuery',
    'Bootstrap',
    'Angular',
    'Java (OOP, Core & Advanced)',
    'Spring Boot',
    'Hibernate',
    'Spring Data JPA',
    'REST APIs',
    'SQL & PostgreSQL',
    'MongoDB',
    'Git & GitHub',
    'Firebase',
    'Full Stack Java Development',
    'Frontend Development',
    'Responsive & Mobile-Friendly Design',
    'Maven & Docker',
    'Problem Solving & Debugging',
  ];
}
