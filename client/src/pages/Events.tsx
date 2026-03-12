import { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Conference', 'Seminar', 'Workshop', 'Networking'];

  const allEvents = [
    {
      title: 'Global AI Summit 2026',
      type: 'Conference',
      date: 'June 15, 2026',
      description: 'Dive deep into the neural networks and LLMs that are redefining the technological landscape.',
      location: 'San Francisco, CA',
      time: '09:00 AM - 05:00 PM',
      price: '$299.00',
      image: '/assets/event_ai.png'
    },
    {
      title: 'Future of Fintech',
      type: 'Seminar',
      date: 'July 08, 2026',
      description: 'Understanding blockchain, digital currencies, and the next generation of global finance systems.',
      location: 'London, UK',
      time: '10:00 AM - 04:00 PM',
      price: '$199.00',
      image: '/assets/event_finance.png'
    },
    {
      title: 'Product Design Masters',
      type: 'Workshop',
      date: 'August 12, 2026',
      description: 'A hands-on workshop on component-driven design systems and accessible user experiences.',
      location: 'New York, NY',
      time: '09:00 AM - 06:00 PM',
      price: '$150.00',
      image: '/assets/event_design.png'
    },
    {
      title: 'Global Business Strategy',
      type: 'Conference',
      date: 'Sept 22, 2026',
      description: 'Strategic leadership insights from CEOs of the world\'s most successful multi-national corporations.',
      location: 'Dubai, UAE',
      time: '08:00 AM - 05:00 PM',
      price: '$350.00',
      image: '/assets/event_business.png'
    },
    {
      title: 'Tech Leaders Mixer',
      type: 'Networking',
      date: 'Dec 10, 2026',
      description: 'An exclusive evening for C-suite executives and tech visionaries to share insights and build partnerships.',
      location: 'San Jose, CA',
      time: '06:00 PM - 09:00 PM',
      price: 'Free',
      image: '/assets/event_business.png'
    },
    {
      title: 'Startup Founders Night',
      type: 'Networking',
      date: 'Jan 15, 2027',
      description: 'Connect with fellow founders, investors, and mentors in a casual atmosphere designed for networking.',
      location: 'Austin, TX',
      time: '07:00 PM - 10:00 PM',
      price: '$25.00',
      image: '/assets/hero_bg.png'
    },
    {
      title: 'Sustainable Tech Forum',
      type: 'Seminar',
      date: 'Oct 15, 2026',
      description: 'How technology is driving the transition to green energy and circular economies.',
      location: 'Berlin, DE',
      time: '11:00 AM - 03:00 PM',
      price: '$120.00',
      image: '/assets/hero_bg.png' 
    },
    {
      title: 'Cybersecurity Intensive',
      type: 'Workshop',
      date: 'Nov 05, 2026',
      description: 'Advanced threat detection and mitigation strategies for the modern digital enterprise.',
      location: 'Seattle, WA',
      time: '09:00 AM - 05:00 PM',
      price: '$250.00',
      image: '/assets/event_ai.png'
    }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesCategory = filter === 'All' || event.type === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="events-page container animate-fade-in">
      <div className="page-header">
        <h1>Explore <span>Events</span></h1>
        <p>Find the perfect event to advance your career and knowledge.</p>
      </div>

      <div className="filters-bar glass">
        <div className="search-box">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Search events, topics, cities..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="results-info">
        <p>Showing {filteredEvents.length} upcoming events</p>
        <div className="sort-box">
          <Filter size={18} />
          <span>Sort by: Date</span>
        </div>
      </div>

      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, i) => (
            <div key={i} className="event-item glass-card animate-slide-up" style={{animationDelay: `${i * 0.1}s`}}>
              <div className="event-item-img" style={{ backgroundImage: `url(${event.image})` }}></div>
              <div className="event-item-content">
                <div className="event-item-header">
                  <span className="event-item-type">{event.type}</span>
                  <span className="event-item-date"><Calendar size={14} style={{ marginRight: '4px' }} /> {event.date}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-item-details">
                  <span><MapPin size={16} /> {event.location}</span>
                  <span><Clock size={16} /> {event.time}</span>
                </div>
                <div className="event-item-footer">
                  <span className="price">{event.price}</span>
                  <Link to="/events/slug" className="btn btn-primary btn-sm">
                    Register Now <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events glass-card text-center" style={{ gridColumn: '1 / -1', padding: '4rem' }}>
            <h3>No events found matching your criteria.</h3>
            <p>Try adjusting your search or category filters.</p>
            <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => {setSearchTerm(''); setFilter('All');}}>
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Professional Growth Section */}
      <section className="growth-section">
        <div className="glass-card growth-box">
          <div className="growth-content">
            <h2>Accelerate Your <span>Career</span></h2>
            <p>Our events are more than just gatherings. They are career-defining moments where industry leaders share the blue-prints for the next generation of success.</p>
            <div className="growth-features">
              <div className="g-feature">
                <div className="g-icon">01</div>
                <div>
                  <h4>Certified Sessions</h4>
                  <p>Gain industry-recognized certificates for every workshop completed.</p>
                </div>
              </div>
              <div className="g-feature">
                <div className="g-icon">02</div>
                <div>
                  <h4>Exclusive Networking</h4>
                  <p>Access private lounges to connect directly with keynote speakers.</p>
                </div>
              </div>
              <div className="g-feature">
                <div className="g-icon">03</div>
                <div>
                  <h4>Resource Library</h4>
                  <p>Lifetime access to session recordings and exclusive toolkits.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="growth-image" style={{ backgroundImage: "url('/assets/event_business.png')" }}>
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      <style>{`
        .events-page {
          padding-top: 120px;
        }

        .page-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .page-header span {
          color: var(--primary);
        }

        .filters-bar {
          display: flex;
          padding: 1.5rem;
          border-radius: 16px;
          gap: 2rem;
          margin-bottom: 3rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          min-width: 300px;
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--background);
          padding: 0.8rem 1.2rem;
          border-radius: 10px;
          border: 1px solid var(--glass-border);
        }

        .search-box input {
          background: none;
          border: none;
          color: white;
          width: 100%;
          outline: none;
        }

        .category-filters {
          display: flex;
          gap: 0.8rem;
          overflow-x: auto;
          padding-bottom: 5px;
        }

        .filter-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          white-space: nowrap;
          color: var(--text-muted);
          background: var(--glass);
          border: 1px solid var(--glass-border);
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text);
          border-color: var(--primary);
        }

        .filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .results-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .sort-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          cursor: pointer;
        }

        .events-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .event-item {
          display: flex;
          border-radius: 16px;
          overflow: hidden;
        }

        .event-item-img {
          width: 250px; /* Increased slightly for desktop */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100%;
          flex-shrink: 0;
        }

        .event-item-content {
          padding: 1.5rem;
          flex: 1;
        }

        .event-item-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .event-item-type {
          color: var(--primary);
          text-transform: uppercase;
        }

        .event-item-date {
          color: var(--text-muted);
        }

        .event-item h3 {
          margin-bottom: 0.8rem;
        }

        .event-item p {
          font-size: 0.9rem;
          margin-bottom: 1.2rem;
          line-height: 1.4;
        }

        .event-item-details {
          display: flex;
          gap: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          flex-wrap: wrap; /* Let details wrap */
        }

        .event-item-details span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .event-item-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap; /* Let footer wrap */
          gap: 1rem;
        }

        .btn-sm {
          padding: 0.6rem 1.2rem;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .events-list { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .event-item { flex-direction: column; }
          .event-item-img { width: 100%; height: 200px; }
          .filters-bar { flex-direction: column; align-items: stretch; gap: 1rem; padding: 1rem; }
          .search-box { min-width: 0; width: 100%; }
          .category-filters { padding-bottom: 10px; }
          .results-info { flex-direction: column; align-items: flex-start; gap: 1rem; }
        }

        /* Growth Section Styles */
        .growth-section {
          margin-top: 3rem;
          margin-bottom: 3rem;
        }

        .growth-box {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          padding: 0;
          overflow: hidden;
          border-radius: 24px;
        }

        .growth-content {
          padding: 4rem;
        }

        .growth-content h2 { font-size: 2.5rem; margin-bottom: 1.5rem; }
        .growth-content p { color: var(--text-muted); margin-bottom: 3rem; line-height: 1.6; }

        .growth-features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .g-feature {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .g-icon {
          width: 40px;
          height: 40px;
          background: var(--primary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .g-feature h4 { margin-bottom: 0.3rem; }
        .g-feature p { font-size: 0.85rem; margin-bottom: 0; }

        .growth-image {
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.3);
        }

        @media (max-width: 992px) {
          .growth-box { grid-template-columns: 1fr; }
          .growth-image { height: 300px; order: -1; }
          .growth-content { padding: 3rem 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Events;
