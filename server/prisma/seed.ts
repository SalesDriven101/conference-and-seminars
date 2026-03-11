import { PrismaClient, Role, EventType, TicketType, MessageStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // 1. Clean database
  await prisma.session.deleteMany();
  await prisma.speaker.deleteMany();
  await prisma.registration.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();
  await prisma.contactMessage.deleteMany();
  await prisma.newsletterSubscriber.deleteMany();
  await prisma.siteSettings.deleteMany();

  // 2. Create Admin User
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.create({
    data: {
      email: 'admin@summitsphere.com',
      password: hashedPassword,
      name: 'Site Admin',
      role: Role.ADMIN,
    },
  });

  // 3. Create Speakers
  const speaker1 = await prisma.speaker.create({
    data: {
      name: 'Sarah Chen',
      title: 'Senior Software Architect',
      company: 'TechFlow Systems',
      bio: 'Leading architecture for cloud-scale applications with over 15 years of experience in distributed systems.',
      expertise: ['Cloud Architecture', 'TypeScript', 'Serverless'],
      twitter: 'sarahchen_tech',
      linkedin: 'sarahchen',
    },
  });

  const speaker2 = await prisma.speaker.create({
    data: {
      name: 'Marcus Rodriguez',
      title: 'Head of Product Design',
      company: 'Creative Labs',
      bio: 'Award-winning designer focusing on creating intuitive and accessible digital experiences.',
      expertise: ['UX/UI Design', 'Design Systems', 'Accessibility'],
      twitter: 'marcus_designs',
    },
  });

  // 4. Create Events
  const event1 = await prisma.event.create({
    data: {
      title: 'Global Tech Summit 2026',
      slug: 'global-tech-summit-2026',
      type: EventType.CONFERENCE,
      category: 'Technology',
      description: 'The premier conference for developers and tech leaders to explore the future of software engineering.',
      startDate: new Date('2026-06-15T09:00:00Z'),
      endDate: new Date('2026-06-17T18:00:00Z'),
      venueName: 'Tech Hub Convention Center',
      venueAddress: '123 Innovation Way',
      city: 'San Francisco',
      country: 'USA',
      capacity: 500,
      price: 299.99,
      isFree: false,
      featured: true,
      tags: ['AI', 'Web3', 'Architecture'],
      sessions: {
        create: [
          {
            title: 'The Future of AI in Development',
            description: 'Exploring how LLMs are changing the way we build software.',
            track: 'Main Stage',
            startTime: new Date('2026-06-15T10:00:00Z'),
            endTime: new Date('2026-06-15T11:30:00Z'),
            speakers: { connect: [{ id: speaker1.id }] },
          },
        ],
      },
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: 'Modern UI Design Workshop',
      slug: 'modern-ui-design-workshop',
      type: EventType.WORKSHOP,
      category: 'Design',
      description: 'A deep dive into modern UI patterns and design systems.',
      startDate: new Date('2026-07-20T10:00:00Z'),
      endDate: new Date('2026-07-20T16:00:00Z'),
      venueName: 'Creative Loft',
      venueAddress: '456 Design Blvd',
      city: 'New York',
      country: 'USA',
      capacity: 50,
      price: 0,
      isFree: true,
      featured: false,
      tags: ['Figma', 'UX', 'Mobile'],
      sessions: {
        create: [
          {
            title: 'Designing for Accessibility',
            description: 'Why accessibility is the foundation of great design.',
            track: 'Workshop Room A',
            startTime: new Date('2026-07-20T11:00:00Z'),
            endTime: new Date('2026-07-20T12:30:00Z'),
            speakers: { connect: [{ id: speaker2.id }] },
          },
        ],
      },
    },
  });

  // 5. Site Settings
  await prisma.siteSettings.create({
    data: {
      siteName: 'SummitSphere',
      contactEmail: 'hello@summitsphere.com',
    },
  });

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
