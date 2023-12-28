import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

    jobs = [
      {
        title: 'Software Engineer',
        description: 'Develop cutting-edge web applications...',
        company: 'Acme Technologies',
        salary: '100K'
      },
      {
        "title": "Network Administrator",
        "description": "Provide excellent customer service to resolve issues and build relationships.",
        "company": "Apple",
        "salary": "55K-85K"
      },
      {
        "title": "Product Designer",
        "description": "Create visually appealing graphics and illustrations for various purposes.",
        "company": "Slack",
        "salary": "55K-85K"
      },
      {
        "title": "Sales Representative",
        "description": "Build and maintain web applications that are both user-friendly and scalable.",
        "company": "Tesla",
        "salary": "70K-100K"
      },
      {
        "title": "System Administrator",
        "description": "Design, develop, and test software applications.",
        "company": "Spotify",
        "salary": "45K-75K"
      },
      {
        "title": "Full Stack Developer",
        "description": "Create visually appealing graphics and illustrations for various purposes.",
        "company": "Uber",
        "salary": "50K-80K"
      },
      {
        "title": "Accountant",
        "description": "Plan and execute projects to achieve specific goals within budget and time constraints.",
        "company": "Instagram",
        "salary": "45K-75K"
      }
    ];
}
