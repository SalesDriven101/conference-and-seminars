import { Calendar, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              <Calendar className="logo-icon" />
              <span>Summit<span>Sphere</span></span>
            </Link>
            <p>Elevating professional experiences through world-class conferences and seminars. Connect, learn, and grow with experts worldwide.</p>
            <div className="social-links">
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/events">Browse Events</Link></li>
              <li><Link to="/speakers">Our Speakers</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li><Mail size={18} /> info@summitsphere.com</li>
              <li><Phone size={18} /> +1 (555) 123-4567</li>
              <li><MapPin size={18} /> 123 Innovation Way, San Francisco</li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest events and news.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="glass">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 SummitSphere. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--surface);
          padding: 5rem 0 2rem;
          margin-top: 5rem;
          border-top: 1px solid var(--glass-border);
        }

        .footer-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text);
          margin-bottom: 1.5rem;
        }

        .footer-logo span span {
          color: var(--primary);
        }

        .footer-info p {
          margin-bottom: 1.5rem;
          max-width: 300px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--glass);
          color: var(--text-muted);
          transition: var(--transition-bounce);
        }

        .social-links a:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-5px);
        }

        .footer-links h4, .footer-contact h4, .footer-newsletter h4 {
          margin-bottom: 1.5rem;
          color: var(--text);
          font-size: 1.2rem;
        }

        .footer-links ul, .footer-contact ul {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links a {
          color: var(--text-muted);
        }

        .footer-links a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-muted);
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .newsletter-form input {
          padding: 0.8rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
          background: var(--background);
          color: white;
        }

        .newsletter-form button {
          padding: 0.8rem;
          border-radius: 8px;
          background: var(--primary);
          color: white;
          font-weight: 600;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
