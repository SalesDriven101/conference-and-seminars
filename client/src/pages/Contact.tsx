import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const { insertFormData } = await import('../services/supabaseForms');
      await insertFormData('contact_submissions', data);
      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      alert(`V3 DEBUG ERROR: ${err.message || 'Unknown error occurred. Please refresh the page.'}`);
    }
  };

  return (
    <div className="contact-page container animate-fade-in">
      <div className="page-header text-center">
        <h1>Get in <span>Touch</span></h1>
        <p>Have questions about an upcoming event? Our team is here to help.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-card glass">
            <MessageSquare className="card-icon" />
            <h3>Talk to us</h3>
            <p>Our friendly team is here to help with any inquiries.</p>
            <div className="info-list">
              <div className="info-item">
                <Mail size={20} />
                <span>support@summitsphere.com</span>
              </div>
              <div className="info-item">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="contact-card glass">
            <MapPin className="card-icon" />
            <h3>Visit us</h3>
            <p>Check out our head office in the heart of the tech hub.</p>
            <div className="info-list">
              <div className="info-item">
                <span>123 Innovation Way, San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container glass">
          {submitted ? (
            <div className="success-message text-center">
              <div className="success-icon">✓</div>
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="full_name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="registration">Registration Help</option>
                  <option value="speaking">Speaking Opportunity</option>
                  <option value="sponsorship">Sponsorship</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea name="message" rows={5} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-page { padding-top: 120px; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          margin-top: 4rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-card {
          padding: 2.5rem;
          border-radius: 20px;
        }

        .card-icon { color: var(--primary); width: 32px; height: 32px; margin-bottom: 1.5rem; }
        .contact-card h3 { margin-bottom: 0.5rem; }
        .contact-card p { margin-bottom: 1.5rem; }

        .info-list { display: flex; flex-direction: column; gap: 1rem; }
        .info-item { display: flex; align-items: center; gap: 1rem; color: var(--text); font-weight: 500; }

        .contact-form-container {
          padding: 3rem;
          border-radius: 24px;
        }

        .contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .form-group label { font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }

        .form-group input, .form-group select, .form-group textarea {
          padding: 0.8rem 1.2rem;
          background: var(--background);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          font-family: inherit;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
          outline: none;
        }

        .success-message { padding: 4rem 0; }
        .success-icon {
          width: 80px;
          height: 80px;
          background: var(--success);
          color: white;
          font-size: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 600px) {
          .contact-form-container { padding: 1.5rem; }
          .contact-card { padding: 1.5rem; }
          .page-header h1 { font-size: 2.2rem; }
          .success-icon { width: 60px; height: 60px; font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
