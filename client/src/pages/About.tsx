import { Target, Users, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* About Hero */}
      <section className="about-hero" style={{ backgroundImage: "url('/assets/event_business.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay-about"></div>
        <div className="container">
          <div className="hero-content text-center animate-slide-up">
            <h1>Elevating <span>Knowledge</span>, Connecting Leaders</h1>
            <p>SummitSphere is the world's leading platform for professional growth, dedicated to curating experiences that inspire innovation and foster meaningful connections.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission container">
        <div className="mission-grid">
          <div className="mission-text">
            <h2>Our <span>Mission</span></h2>
            <p>We believe that the most powerful catalyst for progress is the exchange of ideas between passionate professionals. Our mission is to bridge the gap between industry breakthroughs and the people who implement them.</p>
            <p>Through our carefully curated conferences, immersive seminars, and hands-on workshops, we provide the environment where the future is discussed, designed, and decided.</p>
            <div className="mission-stats">
              <div className="m-stat">
                <h3>98%</h3>
                <p>Satisfaction Rate</p>
              </div>
              <div className="m-stat">
                <h3>150+</h3>
                <p>Global Partners</p>
              </div>
            </div>
          </div>
          <div className="mission-image glass" style={{ backgroundImage: "url('/assets/hero_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="image-overlay"></div>
            <div className="placeholder-content">
              <Target size={48} className="icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values container">
        <div className="section-header text-center">
          <h2>Our Core <span>Values</span></h2>
          <p>The principles that guide every event we produce.</p>
        </div>
        <div className="values-grid">
          <div className="value-card glass">
            <ShieldCheck className="value-icon" />
            <h3>Excellence</h3>
            <p>We strive for perfection in every detail, from venue selection to session content.</p>
          </div>
          <div className="value-card glass">
            <Users className="value-icon" />
            <h3>Community</h3>
            <p>We build lasting networks that extend far beyond the duration of our events.</p>
          </div>
          <div className="value-card glass">
            <Award className="value-icon" />
            <h3>Innovation</h3>
            <p>We showcase the most cutting-edge technologies and methodologies in the world.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta container">
        <div className="cta-box glass text-center">
          <h2>Ready to <span>Experience</span> the Difference?</h2>
          <p>Join thousands of professionals who have accelerated their careers with SummitSphere.</p>
          <Link to="/events" className="btn btn-primary">
            Browse Upcoming Events <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .about-page { padding-top: 80px; }
        .text-center { text-align: center; }
        
        .about-hero {
          padding: 4rem 0;
          position: relative;
          min-height: 35vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-overlay-about {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%);
          z-index: 1;
        }

        .about-hero .container {
          position: relative;
          z-index: 2;
        }

        .about-hero h1 { font-size: 4rem; margin-bottom: 1.5rem; }
        .about-hero p { max-width: 800px; margin: 0 auto; font-size: 1.2rem; }

        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-top: 2rem;
        }

        .mission-text h2 { font-size: 2.5rem; margin-bottom: 1.5rem; }
        .mission-text p { margin-bottom: 1.5rem; line-height: 1.8; }

        .mission-stats {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
        }

        .m-stat h3 { font-size: 2.5rem; color: var(--primary); }
        .m-stat p { font-weight: 600; color: var(--text); }

        .mission-image {
          height: 450px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.4);
          z-index: 1;
        }

        .placeholder-content {
          position: relative;
          z-index: 2;
        }

        .placeholder-content .icon { color: white; opacity: 0.8; }

        .values {
          margin-top: 2rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .value-card {
          padding: 3rem 2rem;
          border-radius: 20px;
          text-align: center;
        }

        .value-icon { width: 48px; height: 48px; color: var(--secondary); margin-bottom: 1.5rem; }

        .cta-box {
          padding: 5rem;
          border-radius: 30px;
          border: 1px solid var(--primary);
        }

        .cta-box h2 { font-size: 3rem; margin-bottom: 1.5rem; }
        .cta-box p { font-size: 1.2rem; margin-bottom: 2.5rem; }

        @media (max-width: 1024px) {
          .mission-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr; }
          .about-hero h1 { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
};

export default About;
