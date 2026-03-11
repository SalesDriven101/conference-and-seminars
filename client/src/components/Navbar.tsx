import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, User, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, profile, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Calendar className="logo-icon" />
          <span>Summit<span>Sphere</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <div className="user-profile-menu">
              <button className="user-menu-trigger glass" onClick={() => setShowUserMenu(!showUserMenu)}>
                <div className="user-avatar" style={{ backgroundImage: profile?.avatar_url ? `url(${profile.avatar_url})` : 'none' }}>
                  {!profile?.avatar_url && <User size={18} />}
                </div>
                <span>{profile?.name || user.email?.split('@')[0]}</span>
                <ChevronDown size={14} className={showUserMenu ? 'rotate' : ''} />
              </button>
              
              {showUserMenu && (
                <div className="user-dropdown glass animate-fade-in">
                  <Link to="/admin" onClick={() => setShowUserMenu(false)}>Dashboard</Link>
                  <button onClick={() => { signOut(); setShowUserMenu(false); }}>
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="login-btn">
              <User size={18} />
              <span>Login</span>
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/login" className="mobile-link" onClick={() => setIsOpen(false)}>Login</Link>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          transition: var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          height: 70px;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text);
        }

        .nav-logo span span {
          color: var(--primary);
        }

        .logo-icon {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-muted);
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition-normal);
        }

        .nav-link.active::after, .nav-link:hover::after {
          width: 100%;
        }

        .login-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          background: var(--primary);
          color: white;
          transition: var(--transition-bounce);
        }

        .login-btn:hover {
          background: var(--primary-dark);
          transform: scale(1.05);
        }

        .user-profile-menu {
          position: relative;
        }

        .user-menu-trigger {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
          color: white;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition-normal);
        }

        .user-menu-trigger:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .user-avatar {
          width: 28px;
          height: 28px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          color: white;
        }

        .user-menu-trigger text {
          color: white;
        }

        .user-menu-trigger .rotate {
          transform: rotate(180deg);
        }

        .user-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          min-width: 200px;
          background: #1e293b;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          z-index: 1001;
        }

        .user-dropdown a, .user-dropdown button {
          padding: 0.8rem 1rem;
          border-radius: 10px;
          color: #cbd5e1;
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: var(--transition-normal);
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
        }

        .user-dropdown a:hover, .user-dropdown button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .mobile-toggle {
          display: none;
          color: var(--text);
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
          
          .mobile-nav {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: var(--surface);
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-150%);
            transition: var(--transition-normal);
            border-bottom: 1px solid var(--glass-border);
          }

          .mobile-nav.open {
            transform: translateY(0);
          }

          .mobile-link {
            font-size: 1.2rem;
            font-weight: 600;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
