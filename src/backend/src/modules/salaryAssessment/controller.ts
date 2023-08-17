import { Request, Response } from 'express';
import { errorWrapper } from '../../utils';
import { SalaryAssessmentService } from '../../services/SalaryAssessment';
const { getAllRecords } = SalaryAssessmentService();
import config from '../../../config';
const { DEBUG } = config;

/**
 * Provide all salary assessment records.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method GET
 * @route /salaryAssessment
 */
export const getAll = errorWrapper(async (req: Request, res: Response) => {
  if (DEBUG) console.log('getAll controller in salary assessment called.');

  const records = await getAllRecords();
  if (records.length <= 0) return res.status(404).send('No records found.');
  res.status(200).json(records);
});
