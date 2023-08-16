import express from 'express';
const router = express.Router();

import { isHealthy, isReady } from './controller';

/**
 * Check if application is healthy.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method GET
 * @route /health
 */
router.get('/', isHealthy);

/**
 * Check if application has a connection to the database.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method GET
 * @route /health/ready
 */
router.get('/ready', isReady);

export default router;
