import { Component } from '@angular/core';

@Component({
  selector: 'app-job-content',
  templateUrl: './job-content.component.html',
  styleUrls: ['./job-content.component.css']
})
export class JobContentComponent {


   jobs = [
    {
      companyName: 'TechCorp Inc.',
      jobName: 'Software Engineer',
      city: 'New York'
    },
    {
      companyName: 'HealthMed Solutions',
      jobName: 'Medical Researcher',
      city: 'San Francisco'
    },
    {
      companyName: 'EcoEnergy LLC',
      jobName: 'Renewable Energy Specialist',
      city: 'Seattle'
    },
    {
      companyName: 'Designify Studios',
      jobName: 'Graphic Designer',
      city: 'Los Angeles'
    },
    {
      companyName: 'EduFuture Academy',
      jobName: 'Educational Consultant',
      city: 'Chicago'
    },
    {
      companyName: 'MarketGenius Co.',
      jobName: 'Marketing Analyst',
      city: 'Miami'
    },
    {
      companyName: 'WebCrafters Agency',
      jobName: 'Web Developer',
      city: 'Austin'
    },
    {
      companyName: 'FinTrust Bank',
      jobName: 'Financial Advisor',
      city: 'Boston'
    },
    {
      companyName: 'RoboticsTech Ltd.',
      jobName: 'AI Specialist',
      city: 'San Diego'
    },
    {
      companyName: 'TravelGo Enterprises',
      jobName: 'Travel Consultant',
      city: 'Denver'
    }
  ];
}
