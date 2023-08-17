import express from 'express';
const router = express.Router();

import { getAll, getById, create } from './controller';

/**
 * Provide all salary assessment records.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method GET
 * @route /salaryAssessment
 */
router.get('/', getAll);

/**
 * Provide salary assessment record by id.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method GET
 * @route /salaryAssessment/:id
 */
router.get('/:id', getById);

/**
 * Create salary assessment record.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method PUT
 * @route /salaryAssessment
 */
router.put('/', create);

export default router;
