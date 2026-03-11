import { useState } from 'react';
import { Github, Twitter, Linkedin, Search, Send } from 'lucide-react';

const Speakers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allSpeakers = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Lead Architect',
      company: 'Quantum Systems',
      expertise: ['Quantum Computing', 'Cloud Scalability'],
      image: '/assets/event_ai.png',
      bio: 'Spearheading the integration of quantum algorithms into enterprise cloud infrastructure.',
      color: '#3b82f6'
    },
    {
      name: 'Marcus Thorne',
      title: 'UX Visionary',
      company: 'Studio Aris',
      expertise: ['Design Psychology', 'Immersive UI'],
      image: '/assets/event_design.png',
      bio: 'Redefining the boundaries of digital interaction through emotive design principles.',
      color: '#f59e0b'
    },
    {
      name: 'Anya Petrov',
      title: 'Blockchain Engineer',
      company: 'Nexus Finance',
      expertise: ['Web3', 'Smart Contracts'],
      image: '/assets/event_finance.png',
      bio: 'Developing secure layer-2 solutions for the next generation of decentralized finance.',
      color: '#10b981'
    },
    {
      name: 'Julian Vance',
      title: 'Growth Specialist',
      company: 'Velocity Media',
      expertise: ['Brand Scaling', 'Viral Growth'],
      image: '/assets/event_business.png',
      bio: 'Helping startups reach global audiences through data-driven storytelling and strategy.',
      color: '#ef4444'
    },
    {
      name: 'Elena Rodriguez',
      title: 'AI Researcher',
      company: 'OpenMind Labs',
      expertise: ['Neural Networks', 'NLP'],
      image: '/assets/event_ai.png',
      bio: 'Focusing on the intersection of large language models and human-centric automation.',
      color: '#8b5cf6'
    },
    {
      name: 'Kenji Sato',
      title: 'Security Lead',
      company: 'Fortress Core',
      expertise: ['Zero Trust', 'Cyber Defense'],
      image: '/assets/hero_bg.png',
      bio: 'Designing unbreakable security perimeters for high-stakes government and private entities.',
      color: '#2563eb'
    },
    {
      name: 'Sasha Bloom',
      title: 'Creative Director',
      company: 'Lush Digital',
      expertise: ['Motion Graphics', 'VR Art'],
      image: '/assets/event_design.png',
      bio: 'Crafting virtual worlds that challenge our perception of reality and digital space.',
      color: '#ec4899'
    },
    {
      name: 'Victor Black',
      title: 'Fintech Analyst',
      company: 'Summit Capital',
      expertise: ['Global Markets', 'Crypto-Economics'],
      image: '/assets/event_finance.png',
      bio: 'Analyzing the macroeconomic impact of digital assets on the traditional banking sector.',
      color: '#f59e0b'
    }
  ];

  const filteredSpeakers = allSpeakers.filter(speaker => 
    speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    speaker.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    speaker.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    speaker.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="speakers-page container animate-fade-in">
      <div className="page-header">
        <h1>Our <span>Luminaries</span></h1>
        <p>Meet the visionaries, creators, and experts who are leading the way in their respective fields.</p>
      </div>

      <div className="speakers-search glass">
        <Search size={22} />
        <input 
          type="text" 
          placeholder="Search speakers by name, company, or expertise..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredSpeakers.length > 0 ? (
        <div className="speakers-grid">
          {filteredSpeakers.map((speaker, i) => (
            <div key={i} className="speaker-card glass-card animate-slide-up" style={{animationDelay: `${i * 0.1}s`}}>
              <div className="speaker-image">
                <div 
                  className="image-circle" 
                  style={{ 
                    backgroundImage: `url(${speaker.image})`,
                    borderColor: speaker.color
                  }}
                ></div>
              </div>
              <div className="speaker-info">
                <h3 style={{ color: speaker.color }}>{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <p className="speaker-company">{speaker.company}</p>
                <div className="speaker-tags">
                  {speaker.expertise.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <p className="speaker-bio-short">{speaker.bio}</p>
                <div className="speaker-social">
                  <a href="#" style={{ color: speaker.color }}><Twitter size={18} /></a>
                  <a href="#" style={{ color: speaker.color }}><Linkedin size={18} /></a>
                  <a href="#" style={{ color: speaker.color }}><Github size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results glass-card text-center" style={{ padding: '4rem' }}>
          <h3>No speakers found match your search.</h3>
          <p>Try different keywords or browse our full roster.</p>
          <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => setSearchTerm('')}>
            Clear Search
          </button>
        </div>
      )}

      {/* Become a Speaker CTA Section */}
      <section className="speaker-cta">
        <div className="glass-card cta-box-speakers">
          <div className="cta-content">
            <h2>Become a <span>Luminary</span></h2>
            <p>Do you have groundbreaking insights or a story that needs to be told? Join our global roster of elite speakers and inspire the next generation of professional leaders.</p>
            <div className="cta-perks">
              <div className="perk">
                <span className="perk-label">Global Access</span>
                <p>Reach an audience of thousands across 50+ countries.</p>
              </div>
              <div className="perk">
                <span className="perk-label">Premium Support</span>
                <p>Full travel, accommodation, and session coaching provided.</p>
              </div>
            </div>
            <a href="#speaker-apply" className="btn btn-primary">Apply to Speak</a>
          </div>
          <div className="cta-image" style={{ backgroundImage: "url('/assets/hero_bg.png')" }}>
            <div className="image-overlay-speaker"></div>
          </div>
        </div>
      </section>

      {/* Speaker Application Form Section */}
      <section id="speaker-apply" className="speaker-application container">
        <div className="glass-card speaker-form-box animate-slide-up">
          <div className="section-header">
            <h2>Application <span>Form</span></h2>
            <p>Tell us about your area of expertise. We'll get back to you within 48 hours.</p>
          </div>
          <form className="speaker-apply-form" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const data = {
              full_name: formData.get('full_name'),
              email: formData.get('email'),
              company: formData.get('company'),
              portfolio: formData.get('portfolio'),
              topic: formData.get('topic'),
            };

            try {
              const { insertFormData } = await import('../services/supabaseForms');
              await insertFormData('speaker_applications', data);
              alert('Application submitted successfully!');
              form.reset();
            } catch (err) {
              alert('Something went wrong. Please try again.');
            }
          }}>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="full_name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Company / Organization</label>
                <input type="text" name="company" placeholder="Tech Global" required />
              </div>
              <div className="form-group">
                <label>Speaker Portfolio / Website</label>
                <input type="url" name="portfolio" placeholder="https://..." required />
              </div>
            </div>
            <div className="form-group">
              <label>Proposed Topic / Expertise</label>
              <textarea name="topic" placeholder="Tell us what you want to talk about..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Application <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      <style>{`
        .speakers-page {
          padding-top: 120px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .speakers-search {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          border-radius: 20px;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .speakers-search input {
          background: none;
          border: none;
          color: white;
          font-size: 1.1rem;
          width: 100%;
          outline: none;
        }

        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        .speaker-card {
          text-align: center;
          padding: 2.5rem 1.5rem;
          border-radius: 24px;
        }

        .speaker-image {
          width: 150px;
          height: 150px;
          margin: 0 auto 1.5rem;
          position: relative;
        }

        .image-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          border: 3px solid var(--primary);
          transition: var(--transition-normal);
        }

        .speaker-card:hover .image-circle {
          transform: scale(1.1) rotate(5deg);
        }

        .speaker-bio-short {
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        .speaker-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .speaker-title {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .speaker-company {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.2rem;
        }

        .speaker-tags {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .speaker-tags span {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 4px;
          color: var(--text-muted);
        }

        .speaker-social {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
        }

        .speaker-social a {
          color: var(--text-muted);
        }

        .speaker-social a:hover {
          color: var(--primary);
          transform: translateY(-3px);
        }

        @media (max-width: 600px) {
          .speaker-card { padding: 1.5rem; }
        }

        /* Speaker CTA Section Styles */
        .speaker-cta {
          margin-top: 8rem;
          margin-bottom: 5rem;
        }

        .cta-box-speakers {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          padding: 0;
          overflow: hidden;
          border-radius: 30px;
        }

        .cta-content {
          padding: 5rem 4rem;
        }

        .cta-content h2 { font-size: 3rem; margin-bottom: 1.5rem; }
        .cta-content p { color: var(--text-muted); margin-bottom: 2.5rem; line-height: 1.6; }

        .cta-perks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .perk-label {
          display: block;
          color: var(--primary);
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .perk p { font-size: 0.9rem; color: var(--text-muted); margin: 0; }

        .cta-image {
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .image-overlay-speaker {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.4);
        }

        @media (max-width: 992px) {
          .cta-box-speakers { grid-template-columns: 1fr; }
          .cta-image { height: 300px; order: -1; }
          .cta-content { padding: 3rem 2rem; }
        }

        /* Speaker Application Form Styles */
        .speaker-application {
          margin-top: 3rem;
          margin-bottom: 0;
        }

        .speaker-form-box {
          padding: 4rem;
          border-radius: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .form-group input, .form-group textarea {
          background: var(--surface-light);
          border: 1px solid var(--glass-border);
          padding: 1rem;
          border-radius: 8px;
          color: white;
          outline: none;
          transition: var(--transition-fast);
        }

        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
          background: var(--surface);
        }

        @media (max-width: 768px) {
          .speaker-form-box { padding: 2rem; }
          .form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Speakers;
