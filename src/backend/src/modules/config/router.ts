import express from 'express';
const router = express.Router();

import { getConfig } from './controller';

/**
 * Provide configuration variables to the frontend.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @method GET
 * @route /config
 */
router.get('/', getConfig);

export default router;
