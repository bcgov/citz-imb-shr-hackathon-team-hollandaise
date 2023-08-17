import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateSalAssessTypes1692293395743 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "salary_assessment" ALTER COLUMN "current_salary" TYPE numeric`,
    );
    await queryRunner.query(
      `ALTER TABLE "salary_assessment" ALTER COLUMN "proposed_salary" TYPE numeric`,
    );

    const columnsToAdd = [
      new TableColumn({
        name: 'hiring_manager_display_name',
        type: 'text',
        isNullable: true,
      }),
      new TableColumn({
        name: 'hiring_manager_username',
        type: 'text',
        isNullable: true,
      }),
      new TableColumn({
        name: 'hiring_manager_guid',
        type: 'text',
        isNullable: true,
      }),
      new TableColumn({
        name: 'proposed_postion_number',
        type: 'text',
        isNullable: true,
      }),
    ];

    for (const column of columnsToAdd) {
      await queryRunner.addColumn('salary_assessment', column);
    }

    await queryRunner.renameColumn(
      'salary_assessment',
      'proposed_appointment',
      'proposed_appointment_type',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Revert type changes for current_salary and proposed_salary
    await queryRunner.query(
      `ALTER TABLE "salary_assessment" ALTER COLUMN "current_salary" TYPE text`,
    );
    await queryRunner.query(
      `ALTER TABLE "salary_assessment" ALTER COLUMN "proposed_salary" TYPE text`,
    );

    // Remove new columns related to hiring manager
    await queryRunner.dropColumn('salary_assessment', 'hiring_manager_display_name');
    await queryRunner.dropColumn('salary_assessment', 'hiring_manager_username');
    await queryRunner.dropColumn('salary_assessment', 'hiring_manager_guid');

    // Remove proposed_position_number column
    await queryRunner.dropColumn('salary_assessment', 'proposed_postion_number');

    // Rename proposed_appointment_type back to proposed_appointment
    await queryRunner.renameColumn(
      'salary_assessment',
      'proposed_appointment_type',
      'proposed_appointment',
    );
  }
}
