import { Request, Response } from 'express';
import prisma from '../prisma';

export const getEvents = async (req: Request, res: Response) => {
  try {
    const { type, category, city, featured } = req.query;
    
    const events = await prisma.event.findMany({
      where: {
        published: true,
        type: type ? (type as any) : undefined,
        category: category ? (category as string) : undefined,
        city: city ? (city as string) : undefined,
        featured: featured === 'true' ? true : undefined,
      },
      include: {
        _count: {
          select: { registrations: true }
        }
      },
      orderBy: { startDate: 'asc' }
    });
    
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
};

export const getEventBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const event = await prisma.event.findUnique({
      where: { slug },
      include: {
        sessions: {
          include: {
            speakers: true
          },
          orderBy: { startTime: 'asc' }
        }
      }
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event details', error });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const eventData = req.body;
    const event = await prisma.event.create({
      data: {
        ...eventData,
        startDate: new Date(eventData.startDate),
        endDate: new Date(eventData.endDate),
      }
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const eventData = req.body;
    const event = await prisma.event.update({
      where: { id },
      data: {
        ...eventData,
        startDate: eventData.startDate ? new Date(eventData.startDate) : undefined,
        endDate: eventData.endDate ? new Date(eventData.endDate) : undefined,
      }
    });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.event.delete({ where: { id } });
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
};
