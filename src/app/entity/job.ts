import {JobCategory} from "./jobCategory";
import {Company} from "./company";

export class Job {
  id?: number;
  name?: string;
  jobLevel?: string;
  requiredExperience?: string;
  requiredEducation?: string;
  location?: string;
  jobType?: string;
  description?: string;
  jobCategory?: Set<JobCategory>;
  company?: Company;

  constructor(
    id?: number,
    name?: string,
    jobLevel?: string,
    requiredExperience?: string,
    requiredEducation?: string,
    location?: string,
    jobType?: string,
    description?: string,
    jobCategory?: Set<JobCategory>,
    company?: Company
  ) {
    this.id = id;
    this.name = name;
    this.jobLevel = jobLevel;
    this.requiredExperience = requiredExperience;
    this.requiredEducation = requiredEducation;
    this.location = location;
    this.jobType = jobType;
    this.description = description;
    this.jobCategory = jobCategory;
    this.company = company;
  }
}
