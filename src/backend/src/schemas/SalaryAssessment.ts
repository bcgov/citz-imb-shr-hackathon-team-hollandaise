import { z } from 'zod';

export const SalaryAssessmentSchema = z.object({
  id: z.number(),
  hiring_manager_display_name: z.string(),
  hiring_manager_username: z.string(),
  hiring_manager_guid: z.string(),
  name: z.string(),
  current_classification: z.string(),
  current_job_title: z.string(),
  current_salary: z.number(),
  current_organization: z.string(),
  education_experience: z.string(),
  proposed_postion_number: z.string(),
  proposed_job_title: z.string(),
  proposed_classification: z.string(),
  proposed_appointment_type: z.string(),
  proposed_salary: z.number(),
  comments: z.string().optional(),
  createdOn: z.date().optional(),
  lastUpdated: z.date().optional(),
});

// New record has these properties as optional.
export const NewSalaryAssessmentSchema = SalaryAssessmentSchema.omit({
  proposed_postion_number: true,
  proposed_job_title: true,
  proposed_classification: true,
  proposed_appointment: true,
  proposed_salary: true,
}).partial();

// Derive the TypeScript type from the Zod schema.
export type SalaryAssessmentType = z.infer<typeof SalaryAssessmentSchema>;
export type NewSalaryAssessmentType = z.infer<typeof NewSalaryAssessmentSchema>;
