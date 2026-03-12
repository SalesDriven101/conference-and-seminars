import { MapPin, Calendar, Users, ArrowLeft, Share2, Heart, CheckCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const EventDetails = () => {
  const { slug } = useParams();
  
  // Use slug so TS doesn't complain about unused variables during build
  console.log('Viewing event details for:', slug);

  return (
    <div className="event-details-page animate-fade-in">
      {/* Event Hero */}
      <section className="event-hero">
        <div className="container">
          <Link to="/events" className="back-link"><ArrowLeft size={18} /> Back to events</Link>
          <div className="event-hero-grid">
            <div className="event-hero-content">
              <span className="event-badge">Technology</span>
              <h1>Global Tech Summit 2026</h1>
              <p className="event-tagline">Exploring the frontiers of engineering and digital transformation.</p>
              
              <div className="event-key-info">
                <div className="info-item">
                  <Calendar className="icon" />
                  <div>
                    <span className="label">Date</span>
                    <span className="value">June 15 - 17, 2026</span>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin className="icon" />
                  <div>
                    <span className="label">Location</span>
                    <span className="value">San Francisco, CA</span>
                  </div>
                </div>
                <div className="info-item">
                  <Users className="icon" />
                  <div>
                    <span className="label">Capacity</span>
                    <span className="value">500 Attendees</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="registration-card glass">
              <div className="price-tag">
                <span className="label">Ticket Price</span>
                <span className="value">$299.00</span>
              </div>
              <ul className="ticket-features">
                <li><CheckCircle size={16} /> Full event access</li>
                <li><CheckCircle size={16} /> Workshop participation</li>
                <li><CheckCircle size={16} /> Networking dinner</li>
                <li><CheckCircle size={16} /> Digital certificate</li>
              </ul>
              <button className="btn btn-primary w-full">Reserve My Spot</button>
              <div className="card-actions">
                <button className="action-btn"><Heart size={18} /> Save</button>
                <button className="action-btn"><Share2 size={18} /> Share</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Body */}
      <div className="container event-body-grid">
        <div className="event-main-content">
          <section className="event-section">
            <h2>About this Event</h2>
            <p>The Global Tech Summit 2026 is the premier conference for developers and tech leaders to explore the future of software engineering. Join us for three days of intense learning, networking, and inspiration as we dive deep into artificial intelligence, cloud architecture, and the next generation of web technologies.</p>
            <p>Our goal is to provide a platform where innovation meets practice. You'll hear from industry veterans who have built some of the world's most complex systems and emerging thinkers who are redefining how we interact with technology.</p>
          </section>

          <section className="event-section">
            <h2>Schedule</h2>
            <div className="schedule-timeline">
              {[1, 2, 3].map(i => (
                <div key={i} className="schedule-item">
                  <div className="schedule-time">10:00 AM</div>
                  <div className="schedule-info glass">
                    <h3>The Future of AI in Development</h3>
                    <p>Exploring how LLMs are changing the way we build software.</p>
                    <div className="schedule-meta">
                      <span>Main Stage</span>
                      <span>1.5 Hours</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="event-sidebar">
          <div className="sidebar-section">
            <h3>Venue</h3>
            <div className="venue-card glass">
              <div className="venue-map"></div>
              <div className="venue-info">
                <h4>Tech Hub Convention Center</h4>
                <p>123 Innovation Way, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Speakers</h3>
            <div className="sidebar-speakers">
              {[1, 2].map(i => (
                <div key={i} className="mini-speaker glass">
                  <div className="mini-avatar"></div>
                  <div className="mini-info">
                    <h4>Sarah Chen</h4>
                    <p>TechFlow Systems</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .event-details-page {
          padding-top: 80px;
        }

        .event-hero {
          background: linear-gradient(180deg, var(--surface) 0%, var(--background) 100%);
          padding: 4rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .back-link:hover {
          color: var(--primary);
        }

        .event-hero-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .event-badge {
          display: inline-block;
          padding: 0.3rem 1rem;
          background: var(--primary);
          color: white;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .event-hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .event-tagline {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          color: var(--text-muted);
        }

        .event-key-info {
          display: flex;
          gap: 3rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .info-item .icon {
          color: var(--primary);
          width: 32px;
          height: 32px;
        }

        .info-item .label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-item .value {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .registration-card {
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--primary);
        }

        .price-tag {
          text-align: center;
          margin-bottom: 2rem;
        }

        .price-tag .label {
          display: block;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .price-tag .value {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text);
        }

        .ticket-features {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ticket-features li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-muted);
        }

        .ticket-features li svg {
          color: var(--success);
        }

        .w-full { width: 100%; justify-content: center; }

        .card-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem;
          border-radius: 8px;
          background: var(--glass);
          color: var(--text);
          font-weight: 600;
          border: 1px solid var(--glass-border);
        }

        .event-body-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
        }

        .event-section {
          margin-bottom: 4rem;
        }

        .event-section h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          border-left: 4px solid var(--primary);
          padding-left: 1rem;
        }

        .event-section p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .schedule-timeline {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .schedule-item {
          display: flex;
          gap: 2rem;
        }

        .schedule-time {
          font-weight: 700;
          color: var(--primary);
          width: 80px;
          padding-top: 1rem;
        }

        .schedule-info {
          flex: 1;
          padding: 2rem;
          border-radius: 16px;
        }

        .schedule-info h3 { margin-bottom: 0.5rem; }
        .schedule-info p { font-size: 1rem; margin-bottom: 1rem; color: var(--text-muted); }

        .schedule-meta {
          display: flex;
          gap: 2rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
        }

        .sidebar-section {
          margin-bottom: 3rem;
        }

        .sidebar-section h3 {
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .venue-card {
          overflow: hidden;
          border-radius: 16px;
        }

        .venue-map {
          height: 150px;
          background: var(--surface-light);
        }

        .venue-info {
          padding: 1.5rem;
        }

        .venue-info h4 { margin-bottom: 0.5rem; }
        .venue-info p { font-size: 0.9rem; color: var(--text-muted); }

        .sidebar-speakers {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mini-speaker {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
        }

        .mini-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--surface-light);
        }

        .mini-info h4 { font-size: 1rem; }
        .mini-info p { font-size: 0.8rem; color: var(--primary); }

        @media (max-width: 1024px) {
          .event-hero-grid { grid-template-columns: 1fr; }
          .event-body-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default EventDetails;
