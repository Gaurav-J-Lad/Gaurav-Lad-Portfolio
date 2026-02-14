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
    `Hi! <b>I'm Gaurav Lad</b>, currently learning <b>Full Stack Java Development</b> and building expertise in frontend technologies like <b>Angular, Bootstrap, and responsive web design.</b> I enjoy creating interactive, user-friendly applications and continuously exploring modern tools and frameworks.`,

    `My goal is to combine my backend knowledge in Java with frontend skills to develop complete, scalable web applications. I am passionate about coding, problem-solving, and contributing to meaningful projects while improving my skillset.`,

    `I am actively searching for opportunities where I can apply my skills in <b>Angular and frontend development</b>, while growing as a <b>Full Stack Java Developer</b>.`,
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

  // Skills list
  skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Jquery',
    'Bootstrap',
    'Angular',
    'MySQL & PostgreSQL',
    'MongoDB',
    'Git & Github',
    'Firebase',
    'Full Stack Java',
    'Frontend Development',
    'Responsive Design',
  ];
}
