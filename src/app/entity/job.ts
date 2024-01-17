import {JobCategory} from "./jobCategory";
import {Company} from "./company";
import {JobType} from "./jobType";
import {Location} from "./location";

export class Job {
    id?: number;
    name?: string;
    jobLevel?: string;
    requiredExperience?: string;
    requiredEducation?: string;
    location?: Location;
    address?: string;
    jobType?: JobType;
    description?: string;
    expiredDate?: Date;
    jobCategory?: Set<JobCategory>;
    company?: Company;
    salary?: string;

    constructor(
        id?: number,
        name?: string,
        jobLevel?: string,
        requiredExperience?: string,
        requiredEducation?: string,
        location?: Location,
        address?: string,
        jobType?: JobType,
        description?: string,
        expiredDate?: Date,
        jobCategory?: Set<JobCategory>,
        company?: Company,
        salary?: string
    ) {
        this.id = id;
        this.name = name;
        this.jobLevel = jobLevel;
        this.requiredExperience = requiredExperience;
        this.requiredEducation = requiredEducation;
        this.location = location;
        this.address = address;
        this.jobType = jobType;
        this.description = description;
        this.expiredDate = expiredDate;
        this.jobCategory = jobCategory;
        this.company = company;
        this.salary = salary;
    }
}
