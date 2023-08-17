import { SalaryAssessment } from '../entities';
import { SalaryAssessmentRepository } from '../repositories';

/**
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @returns An object with methods for performing operations on SalaryAssessment records.
 */
export const SalaryAssessmentService = () => {
  const repository = SalaryAssessmentRepository();

  // Retrieve a record by id.
  const getById = async (id: number): Promise<SalaryAssessment | undefined | null> => {
    return await repository.getById(id);
  };

  // Retrieve all records.
  const getAllRecords = async (): Promise<SalaryAssessment[]> => {
    return await repository.getAll();
  };

  return {
    getById,
    getAllRecords,
  };
};
