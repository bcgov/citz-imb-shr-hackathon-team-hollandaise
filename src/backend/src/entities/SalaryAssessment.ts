import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SalaryAssessment {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id!: number;

  @Column({ type: 'text', nullable: true })
  name: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  current_classification: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  current_job_title: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  current_salary: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  current_organization: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  education_experience: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  proposed_job_title: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  proposed_classification: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  proposed_appointment: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  proposed_salary: string | undefined | null;

  @Column({ type: 'text', nullable: true })
  comments: string | undefined | null;

  @Column({ type: 'timestamp', nullable: true, default: () => 'NOW()' })
  createdOn: Date | undefined | null;

  @Column({ type: 'timestamp', nullable: true })
  lastUpdated: Date | undefined | null;
}
