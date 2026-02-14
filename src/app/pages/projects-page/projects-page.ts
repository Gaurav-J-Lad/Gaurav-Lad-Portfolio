import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [],
  templateUrl: './projects-page.html',
  styleUrls: ['./projects-page.css'],
})
export class ProjectsPage {
  //All Projects Information
  projects = [
    {
      title: 'Gaurav Lad Portfolio Website',
      description:
        'A personal portfolio showcasing my skills, projects, certifications, and professional journey as an aspiring Full Stack Java Developer. Highlights include interactive Angular projects, responsive frontend designs, and real-world applications demonstrating both frontend and backend proficiency.',
      image: 'assets/projects/portfolio-project-pic.png',
      liveLink: 'https://gaurav-lad-portfolio.netlify.app',
      githubLink: 'https://github.com/Gaurav-J-Lad/Gaurav-Lad-Portfolio',
    },
    {
      title: 'MovieLand | Angular Movie Landing App (TMDB API)',
      description:
        'A modern Movie Landing Application built using Angular (Standalone Components), TMDB Movie API, and Bootstrap 5. The app showcases trending, popular, searchable movies with dynamic pagination, a smooth UI, global loader, and centralized error handling.',
      image: 'assets/projects/movieland-using-tmdb-project-pic.png',
      liveLink: 'https://angular-movieland-app-using-tmdb.netlify.app',
      githubLink: 'https://github.com/Gaurav-J-Lad/Angular-Movieland-App-Using-TMDB',
    },
    {
      title: 'Weather App | Angular + Firebase Authentication',
      description:
        'A modern Weather Forecast Application built using Angular (Standalone Components), Firebase Authentication, and OpenWeather API. The app provides protected routing, real-time weather data fetching, and a smooth user experience with a global loading system.',
      image: 'assets/projects/weather-app-project-pic.png',
      liveLink: 'https://my-angular-weather-app-using-firebase.netlify.app',
      githubLink: 'https://github.com/Gaurav-J-Lad/Angular-Weather-App-Using-Firebase',
    },
    {
      title: 'Todo App | Angular + Firebase Authentication',
      description:
        'A secure and modern Todo Management Application built using Angular (Standalone Components), Firebase Authentication, and Firestore. The app provides protected routing, real-time task management, and a smooth user experience with a global loading system.',
      image: 'assets/projects/todo-list-project-pic.png',
      liveLink: 'https://angular-todo-app-firebase.netlify.app',
      githubLink: 'https://github.com/Gaurav-J-Lad/Angular-Todo-List-Using-Firebase',
    },
    {
      title: 'FluxBank | Modern Banking Dashboard',
      description:
        'FluxBank is a stylish, interactive banking web app that allows users to log in, track transactions, transfer money, request loans, and close accounts.Built with HTML, CSS, and JavaScript, it features realistic banking operations, dynamic UI updates, and a modern dark theme.',
      image: 'assets/projects/fluxbank-project-pic.png',
      liveLink: 'https://fluxbank-live.netlify.app',
      githubLink: 'https://github.com/Gaurav-J-Lad/FluxBank',
    },
    {
      title: 'Guess My Number Game | Retro Neon Game',
      description:
        'Guess My Number is a retro-styled, neon-themed web game where players try to guess a secret number between 1 and 30. Built with HTML, CSS, and JavaScript, it features animated glowing effects, responsive design, and live score tracking.',
      image: 'assets/projects/guess-my-number-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Guess-My-Number-Game',
      githubLink: 'https://github.com/Gaurav-J-Lad/Guess-My-Number-Game',
    },
    {
      title: 'IgniteRoutes | Interactive Workout Map',
      description:
        'IgniteRoutes is an interactive web app that lets users log running and cycling workouts on a map in real-time.Built with HTML, CSS, JavaScript, and Leaflet.js, it provides a modern, responsive interface to track workouts and display stats dynamically.',
      image: 'assets/projects/ignite-routes-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Ignite-Routes',
      githubLink: 'https://github.com/Gaurav-J-Lad/Ignite-Routes',
    },
    {
      title: 'Pig Dice Game | Roll for Glory',
      description:
        'A fun and interactive multiplayer dice game where the first player to reach 100 points wins! Built with HTML, CSS & JavaScript, this game supports three players, smooth animations, and a vibrant dark theme for an engaging experience.',
      image: 'assets/projects/pig-game-project-pic.png',
      liveLink: 'https://a-multiplayer-pig-game.netlify.app',
      githubLink: 'https://github.com/Gaurav-J-Lad/Pig-Game',
    },
    {
      title: 'Show Modal | Stylish Modal Window',
      description:
        'A modern and responsive modal window implementation using HTML, CSS & JavaScript. This project demonstrates how to open and close modals via buttons, overlay clicks, and the Escape key — all with smooth animations and a clean design.',
      image: 'assets/projects/show-modal-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Show-Modal',
      githubLink: 'https://github.com/Gaurav-J-Lad/Show-Modal',
    },
    {
      title: 'SoleVibe | Premium Footwear Brand Landing Page',
      description:
        'A bold and responsive landing page for SoleVibe, a fictional contemporary footwear brand. Crafted using HTML, CSS & JavaScript, the site blends vibrant design, product presentation, and modern UI elements into an immersive user experience — all styled with a unique blue–teal–orange aesthetic and custom design system.',
      image: 'assets/projects/solevibe-project-pic.png',
      liveLink: 'https://solevibe-landing-page.netlify.app',
      githubLink: 'https://github.com/Gaurav-J-Lad/SoleVibe-Premium-Footwear-Landing-Page',
    },
    {
      title: 'SonicPulse | Premium Headphones',
      description:
        'A sleek and responsive landing page for SonicPulse, a fictional premium headphone brand. Crafted using HTML, CSS & JavaScript, this project showcases clean layout, product highlights, testimonial section, and engaging visuals — all wrapped in a modern dark theme.',
      image: 'assets/projects/sonicpulse-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/SonicPulse-Premium-Headphones-Landing-Page',
      githubLink: 'https://github.com/Gaurav-J-Lad/SonicPulse-Premium-Headphones-Landing-Page',
    },
    {
      title: 'Tooltip Component (Pure HTML + CSS)',
      description:
        'A clean and responsive tooltip component built using only HTML and CSS. It displays tooltips in four directions — top, bottom, left, and right — on hover, with custom arrow indicators and smooth layout.',
      image: 'assets/projects/tooltip-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Tooltip-Component/',
      githubLink: 'https://github.com/Gaurav-J-Lad/Tooltip-Component',
    },
    {
      title: 'Responsive Comparison Table with Dark Mode',
      description:
        'A modern, accessible, and responsive comparison table component featuring zebra-striping, hover effects, and a fully switchable dark mode. Built using pure HTML, CSS, and JavaScript, this table is ideal for showcasing product specs, feature comparisons, or pricing data.',
      image: 'assets/projects/responsive-table-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Responsive-Comparison-Table-with-Dark-Mode',
      githubLink: 'https://github.com/Gaurav-J-Lad/Responsive-Comparison-Table-with-Dark-Mode',
    },
    {
      title: 'Multi-Level Navigation Bar with Dropdowns',
      description:
        'A sleek, responsive, and colorful multi-level dropdown navigation bar built using only HTML and CSS. Perfect for websites, portfolios, and dashboards that require an organized menu structure with deep nesting support.',
      image: 'assets/projects/multilevel-navigation-bar-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Multi-Level-Navigation-Bar-with-Dropdowns/',
      githubLink: 'https://github.com/Gaurav-J-Lad/Multi-Level-Navigation-Bar-with-Dropdowns',
    },
    {
      title: 'Reusable Pagination Components',
      description:
        'A sleek, responsive collection of pure CSS pagination styles — perfect for modern websites and dashboards.Includes three distinct styles: Blue Circles, Pink Pills, and Orange Squares — no JavaScript required.',
      image: 'assets/projects/reusable-pagination-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Reusable-Pagination/',
      githubLink: 'https://github.com/Gaurav-J-Lad/Reusable-Pagination',
    },
    {
      title: 'Responsive FAQ Accordion Component',
      description:
        'A clean and interactive FAQ accordion interface designed for travel-related questions.Built with semantic HTML, modern CSS styling, and JavaScript-powered toggle animations. Fully responsive and user-friendly across all devices.',
      image: 'assets/projects/responsive-faq-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Responsive-FAQ-Accordion/',
      githubLink: 'https://github.com/Gaurav-J-Lad/Responsive-FAQ-Accordion',
    },
    {
      title: 'Responsive Testimonial Carousel',
      description:
        'A sleek and responsive testimonial carousel built using HTML, CSS, and JavaScript. Showcases user feedback with smooth slide animations, dot navigation, and arrow controls — perfect for product or service websites.',
      image: 'assets/projects/responsive-carousel-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Responsive-Testimonial-Carousel/',
      githubLink: 'https://github.com/Gaurav-J-Lad/Responsive-Testimonial-Carousel',
    },
    {
      title: 'Retro Pac-Man Animation',
      description:
        'A simple and fun CSS-only animated Pac-Man inspired by the classic arcade game. Features smooth mouth movement, blinking eye, and animated dots traveling on a vibrant rainbow path — all created with pure HTML and CSS.',
      image: 'assets/projects/retro-pacman-project-pic.png',
      liveLink: 'https://gaurav-j-lad.github.io/Retro-Pacman/',
      githubLink: 'https://github.com/Gaurav-J-Lad/Retro-Pacman',
    },
    // Add more projects here
  ];
}
