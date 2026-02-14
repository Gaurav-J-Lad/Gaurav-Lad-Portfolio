import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [],
  templateUrl: './skills-page.html',
  styleUrls: ['./skills-page.css'],
})
export class SkillsPage {
  //All Skills Information
  skills = [
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'jQuery', icon: 'devicon-jquery-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'C', icon: 'devicon-c-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'SQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  ];

  tools = [
    { name: 'Visual Studio Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Eclipse', icon: 'devicon-eclipse-plain colored' },
    { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored' },
    { name: 'NetBeans', icon: 'devicon-netbeans-plain colored' },
    { name: 'Atom', icon: 'devicon-atom-original colored' },
  ];
}
