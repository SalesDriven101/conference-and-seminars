import { Request, Response } from 'express';
import prisma from '../prisma';

export const getSpeakers = async (req: Request, res: Response) => {
  try {
    const speakers = await prisma.speaker.findMany({
      orderBy: { name: 'asc' }
    });
    res.json(speakers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching speakers', error });
  }
};

export const getSpeakerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const speaker = await prisma.speaker.findUnique({
      where: { id },
      include: {
        sessions: {
          include: {
            event: true
          }
        }
      }
    });

    if (!speaker) {
      return res.status(404).json({ message: 'Speaker not found' });
    }

    res.json(speaker);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching speaker details', error });
  }
};

export const createSpeaker = async (req: Request, res: Response) => {
  try {
    const speakerData = req.body;
    const speaker = await prisma.speaker.create({
      data: speakerData
    });
    res.status(201).json(speaker);
  } catch (error) {
    res.status(500).json({ message: 'Error creating speaker', error });
  }
};

export const updateSpeaker = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const speakerData = req.body;
    const speaker = await prisma.speaker.update({
      where: { id },
      data: speakerData
    });
    res.json(speaker);
  } catch (error) {
    res.status(500).json({ message: 'Error updating speaker', error });
  }
};

export const deleteSpeaker = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.speaker.delete({ where: { id } });
    res.json({ message: 'Speaker deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting speaker', error });
  }
};
