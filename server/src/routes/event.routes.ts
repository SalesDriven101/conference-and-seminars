import { Router } from 'express';
import * as eventController from '../controllers/event.controller';
import { authenticate, authorizeAdmin } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', eventController.getEvents);
router.get('/:slug', eventController.getEventBySlug);

// Admin routes
router.post('/', authenticate, authorizeAdmin, eventController.createEvent);
router.put('/:id', authenticate, authorizeAdmin, eventController.updateEvent);
router.delete('/:id', authenticate, authorizeAdmin, eventController.deleteEvent);

export default router;
