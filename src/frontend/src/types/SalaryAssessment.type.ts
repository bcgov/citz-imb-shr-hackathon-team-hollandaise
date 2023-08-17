//create a salary assessment type
export type SalaryAssessment = {
  id: number;
  name: string;
  current_classification: string;
  current_job_title: string;
  current_salary: number;
  current_organization: string;
  education_experience: string;
  proposed_job_title: string;
  proposed_classification: string;
  proposed_appointment: string;
  proposed_salary: number;
  comments: string;
  createdOn: Date;
  lastupdated: Date;
}
