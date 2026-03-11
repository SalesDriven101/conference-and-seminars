import { Router } from 'express';
import * as speakerController from '../controllers/speaker.controller';
import { authenticate, authorizeAdmin } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', speakerController.getSpeakers);
router.get('/:id', speakerController.getSpeakerById);

// Admin routes
router.post('/', authenticate, authorizeAdmin, speakerController.createSpeaker);
router.put('/:id', authenticate, authorizeAdmin, speakerController.updateSpeaker);
router.delete('/:id', authenticate, authorizeAdmin, speakerController.deleteSpeaker);

export default router;
