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
  //Carousel Slides Information
  slides = [
    {
      title: 'Welcome to My Portfolio',
      subtitle: 'Aspiring Java Full Stack Developer | Angular & Frontend Enthusiast',
      description:
        'Passionate about building scalable and responsive web applications. Currently advancing my skills in Java Full Stack and Angular.',
      imageClass: 'slide-image-first',
    },

    {
      title: 'Skilled Angular & Frontend Development',
      subtitle: 'Dynamic Web Applications & Responsive Design',
      description:
        'Skilled in Angular, Bootstrap and modern frontend frameworks. Building clean, efficient and responsive applications.',
      imageClass: 'slide-image-second',
    },

    {
      title: 'Creative Frontend Developer',
      subtitle: 'UI/UX Design & Interactive Features',
      description:
        'Designing elegant interfaces and interactive user experiences that delight users.',
      imageClass: 'slide-image-third',
    },
  ];

  //All Links
  resumeLink = 'assets/resume/Gaurav_Lad_Resume.pdf';

  githubLink = 'https://github.com/gaurav-j-lad';

  linkedinLink = 'https://www.linkedin.com/in/gaurav-lad1974/';
}
