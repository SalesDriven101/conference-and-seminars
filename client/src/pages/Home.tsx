import { ArrowRight, Star, Users, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('/assets/event_ai.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container animate-fade-in">
          <span className="badge">Welcome to SummitSphere</span>
          <h1>Empowering the Future of <span>Professional</span> Connection</h1>
          <p>Discover premier conferences and seminars designed to spark innovation, foster collaboration, and accelerate your professional growth.</p>
          <div className="hero-actions">
            <Link to="/events" className="btn btn-primary">
              Explore Events <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Events Yearly</span>
            </div>
            <div className="stat">
              <span className="stat-num">10k+</span>
              <span className="stat-label">Attendees</span>
            </div>
            <div className="stat">
              <span className="stat-num">200+</span>
              <span className="stat-label">Global Speakers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured container">
        <div className="section-header">
          <h2>Upcoming <span>Featured</span> Events</h2>
          <p>Don't miss out on these hand-picked highlights from our upcoming schedule.</p>
        </div>
        
        <div className="events-grid">
          {[
            {
              id: 'ai-summit',
              title: 'AI & Future Tech Summit',
              type: 'Conference',
              date: 'Sept 12-14, 2026',
              location: 'Austin, TX',
              capacity: '1,200',
              price: '$450.00',
              image: '/assets/event_ai.png',
              description: 'Explore the boundaries of artificial intelligence and machine learning with world-class engineers.'
            },
            {
              id: 'design-workshop',
              title: 'Creative Design Mastery',
              type: 'Workshop',
              date: 'Oct 05, 2026',
              location: 'New York, NY',
              capacity: '150',
              price: '$199.00',
              image: '/assets/event_design.png',
              description: 'An immersive hands-on workshop focused on modern UI/UX patterns and creative storytelling.'
            },
            {
              id: 'global-business',
              title: 'Global Business Strategy',
              type: 'Seminar',
              date: 'Nov 20, 2026',
              location: 'London, UK',
              capacity: '500',
              price: '$299.00',
              image: '/assets/event_business.png',
              description: 'Strategic leadership insights from CEOs of the world\'s most successful multi-national corporations.'
            }
          ].map((event, i) => (
            <div key={event.id} className="glass-card event-card animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="event-img" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="event-type">{event.type}</div>
              </div>
              <div className="event-content">
                <div className="event-date">
                  <Calendar size={14} /> {event.date}
                </div>
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <span><MapPin size={14} /> {event.location}</span>
                  <span><Users size={14} /> {event.capacity} Capacity</span>
                </div>
                <p>{event.description}</p>
                <div className="event-footer">
                  <span className="price">{event.price}</span>
                  <Link to={`/events/${event.id}`} className="btn-text">
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features container">
        <div className="feature-grid">
          <div className="feature-item glass">
            <Star className="feature-icon" />
            <h3>Quality Content</h3>
            <p>Curated sessions from industry-leading experts ensuring you get the most valuable insights.</p>
          </div>
          <div className="feature-item glass">
            <Users className="feature-icon" />
            <h3>Networking</h3>
            <p>Connect with peers and mentors in high-engagement environments built for connection.</p>
          </div>
          <div className="feature-item glass">
            <MapPin className="feature-icon" />
            <h3>Prime Venues</h3>
            <p>Located in the most accessible and inspiring locations around the globe.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials container">
        <div className="section-header">
          <h2>Voices of <span>Experience</span></h2>
          <p>What our attendees and speakers have to say about SummitSphere.</p>
        </div>
        <div className="testimonials-grid">
          {[
            {
              name: 'Dr. Sarah Chen',
              role: 'Speaker, AI Summit',
              content: 'The most well-organized tech conference I have ever attended. The level of engagement was unparalleled.',
              avatar: '/assets/event_ai.png'
            },
            {
              name: 'Marcus Rodriguez',
              role: 'Product Designer',
              content: 'I left with a completely new perspective on user experience. The hands-on workshops were transformative.',
              avatar: '/assets/event_design.png'
            },
            {
              name: 'James Wilson',
              role: 'CEO, Nexus Corp',
              content: 'SummitSphere is the premier place for high-level networking. We have formed some of our most valuable partnerships here.',
              avatar: '/assets/event_business.png'
            }
          ].map((t, i) => (
            <div key={i} className="glass-card testimonial-card">
              <div className="quote">"</div>
              <p>{t.content}</p>
              <div className="testimonial-footer">
                <div className="avatar" style={{ backgroundImage: `url(${t.avatar})` }}></div>
                <div className="t-info">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section container">
        <div className="newsletter-box glass">
          <div className="newsletter-content">
            <h2>Stay in the <span>Loop</span></h2>
            <p>Subscribe to our newsletter and receive early-bird access to the world's most exclusive professional events.</p>
            <form className="newsletter-form" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              try {
                const { insertFormData } = await import('../services/supabaseForms');
                await insertFormData('newsletter_subscribers', { email });
                alert('Thank you for subscribing!');
                form.reset();
              } catch (err: any) {
                alert(`Error: ${err.message || 'Something went wrong. Please try again.'}`);
              }
            }}>
              <input type="email" name="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
          <div className="newsletter-bg" style={{ backgroundImage: "url('/assets/newsletter_bg.png')" }}></div>
        </div>
      </section>

      <style>{`
        .home-page {
          padding-top: 80px;
        }

        .hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 3rem 6%;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            rgba(15, 23, 42, 0.9) 0%, 
            rgba(15, 23, 42, 0.6) 40%, 
            rgba(15, 23, 42, 0.2) 100%);
          z-index: 1;
        }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .hero-container {
          max-width: 800px;
          position: relative;
          z-index: 2;
          padding: 0;
          margin-left: 0;
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--glass);
          border: 1px solid var(--primary);
          border-radius: 50px;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .hero h1 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        .hero h1 span {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat-num {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--text);
          font-family: var(--font-heading);
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .hero-shape {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: var(--primary);
          filter: blur(150px);
          opacity: 0.1;
          border-radius: 50%;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-header h2 span {
          color: var(--primary);
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .event-card {
          border-radius: 16px;
          overflow: hidden;
        }

        .event-img {
          height: 200px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          transition: var(--transition-normal);
        }

        .event-card:hover .event-img {
          transform: scale(1.05);
        }

        .event-type {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.3rem 0.8rem;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .event-content {
          padding: 2rem;
        }

        .event-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .event-content h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .event-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .event-meta span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .event-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--glass-border);
        }

        .price {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
        }

        .btn-text {
          color: var(--primary);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-item {
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 20px;
        }

        .feature-icon {
          color: var(--secondary);
          width: 48px;
          height: 48px;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 1024px) {
          .hero h1 { font-size: 3rem; }
          .feature-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .hero { 
            padding: 7rem 1.5rem 4rem; 
            text-align: center; 
          }
          .hero-overlay {
            background: rgba(15, 23, 42, 0.85);
          }
          .hero-container { 
            margin: 0 auto; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
          }
          .hero h1 { font-size: 2.2rem; line-height: 1.3; }
          .hero p { font-size: 1rem; margin-bottom: 2rem; padding: 0 0.5rem; }
          .hero-actions { flex-direction: column; width: 100%; gap: 1rem; margin-bottom: 3rem; }
          .hero-actions .btn { width: 100%; justify-content: center; text-align: center; }
          .hero-stats { 
            flex-direction: row; 
            flex-wrap: wrap; 
            justify-content: center; 
            align-items: center; 
            gap: 2rem; 
            width: 100%;
          }
          .stat { text-align: center; }
          .feature-grid { grid-template-columns: 1fr; }
          .section-header h2 { font-size: 2rem; }
        }

        /* New Sections Styles */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          padding: 3rem 2rem;
          position: relative;
        }

        .testimonial-card .quote {
          font-size: 4rem;
          font-family: serif;
          color: var(--primary);
          opacity: 0.3;
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .testimonial-card p {
          font-style: italic;
          margin-bottom: 2rem;
          line-height: 1.6;
          position: relative;
          z-index: 1;
          margin-top: 1rem;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-footer .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          border: 2px solid var(--primary);
        }

        .t-info h4 { margin: 0; font-size: 1.1rem; }
        .t-info span { font-size: 0.85rem; color: var(--text-muted); }

        .newsletter-section {
          padding-bottom: 4rem;
        }

        .newsletter-box {
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border-radius: 30px;
        }

        .newsletter-content {
          padding: 3rem;
        }

        .newsletter-content h2 { font-size: 3rem; margin-bottom: 1rem; }
        .newsletter-content p { margin-bottom: 2.5rem; color: var(--text-muted); line-height: 1.6; }

        .newsletter-form {
          display: flex;
          gap: 1rem;
        }

        .newsletter-form input {
          flex: 1;
          background: var(--surface-light);
          border: 1px solid var(--glass-border);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          color: white;
          outline: none;
        }

        .newsletter-form input:focus { border-color: var(--primary); }

        .newsletter-bg {
          background-size: cover;
          background-position: center;
        }

        @media (max-width: 992px) {
          .newsletter-box { grid-template-columns: 1fr; }
          .newsletter-bg { height: 300px; order: -1; }
          .newsletter-content { padding: 3rem 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
