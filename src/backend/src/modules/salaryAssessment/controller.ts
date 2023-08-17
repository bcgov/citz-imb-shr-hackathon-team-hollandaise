import { Request, Response } from 'express';
import { errorWrapper } from '../../utils';

import { SalaryAssessmentService } from '../../services/SalaryAssessment';
const { getAllRecords, getRecordById, createNewRecord } = SalaryAssessmentService();

import config from '../../../config';
import { NewSalaryAssessmentSchema } from '../../schemas/SalaryAssessment';
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

/**
 * Provide salary assessment record by id.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method GET
 * @route /salaryAssessment/:id
 */
export const getById = errorWrapper(async (req: Request, res: Response) => {
  if (DEBUG) console.log('getById controller in salary assessment called.');

  const recordId = Number(req.params.id);
  if (!recordId || isNaN(recordId))
    return res.status(400).send('Record id must be included in query (/salaryAssessment/:id).');

  const record = await getRecordById(recordId);
  if (!record) return res.status(404).send(`No record found with id ${recordId}.`);
  res.status(200).json(record);
});

/**
 * Create salary assessment record.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method PUT
 * @route /salaryAssessment
 */
export const create = errorWrapper(async (req: Request, res: Response) => {
  if (DEBUG) console.log('create controller in salary assessment called.');

  const record = req.body;
  const parsedRecord = NewSalaryAssessmentSchema.safeParse(record);
  if (!parsedRecord.success)
    return res.status(400).send('Record in body must follow NewSalaryAssessmentSchema.');

  await createNewRecord(record);
  res.status(201).json(record);
});
