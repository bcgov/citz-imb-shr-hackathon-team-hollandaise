import { SalaryAssessment } from '../entities';
import dataSource from '../../dataSource';

/**
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @returns An object with methods for performing CRUD operations on salary assessment records.
 */
export const SalaryAssessmentRepository = () => {
  const repository = dataSource.getRepository(SalaryAssessment);

  // Retrieve a record by id.
  const getById = async (id: number): Promise<SalaryAssessment | undefined | null> => {
    return await repository.findOne({ where: { id } });
  };

  // Retrieve a record by candadite name.
  const getByName = async (name: string): Promise<SalaryAssessment | undefined | null> => {
    return await repository.findOne({ where: { name } });
  };

  // Retrieve all records.
  const getAll = async (): Promise<SalaryAssessment[]> => {
    return await repository.find();
  };

  // Creates a new record.
  const create = async (data: Partial<SalaryAssessment>): Promise<SalaryAssessment> => {
    const record = repository.create(data);
    return await repository.save(record);
  };

  // Updates an existing record by id.
  const updateById = async (
    id: number,
    data: Partial<SalaryAssessment>,
  ): Promise<SalaryAssessment | undefined> => {
    const record = await getById(id);
    if (!record) return undefined;
    Object.assign(record, data);
    return await repository.save(record);
  };

  // Return an object with the defined methods.
  return {
    create,
    updateById,
    getById,
    getByName,
    getAll,
  };
};
