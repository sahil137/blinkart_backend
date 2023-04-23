import { createOrUpdateUser, currentUser } from '@controllers/user-controller';
import { adminCheck, authCheck } from '@middlewares/index';
import TryCatch from '@utils/try-catch';
import express from 'express';

const router = express.Router();

router.post('/create-or-update-user', authCheck, TryCatch(createOrUpdateUser));
router.post('/current-user', authCheck, TryCatch(currentUser));
router.post('/current-admin', authCheck, adminCheck, TryCatch(currentUser));

export default router;
