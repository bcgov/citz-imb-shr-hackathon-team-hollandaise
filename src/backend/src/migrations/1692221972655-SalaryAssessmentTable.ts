import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class SalaryAssessmentTable1692221972655 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'salary_assessment',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'current_classification',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'current_job_title',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'current_salary',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'current_organization',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'education_experience',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'proposed_job_title',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'proposed_classification',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'proposed_appointment',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'proposed_salary',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'comments',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'createdOn',
            type: 'timestamp',
            default: 'NOW()',
            isNullable: true,
          },
          {
            name: 'lastUpdated',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('salary_assessment');
  }
}
