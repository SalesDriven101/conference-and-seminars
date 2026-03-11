import { useState } from 'react';
import { LogIn, Lock, Mail, ArrowRight, Github, UserPlus, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignup) {
        const { data, error: signupError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signupError) throw signupError;

        if (data.user) {
          // You could also create the profile here manually or via a DB trigger
          // For this setup, we'll assume a trigger handles it, or let the user know to check email
          alert('Check your email for the confirmation link!');
        }
      } else {
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (loginError) throw loginError;
        
        // Success! AuthContext will pick up the change
        navigate('/');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'github' | 'google') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page animate-fade-in">
      <div className="login-container">
        <div className="login-card glass">
          <div className="login-header text-center">
            <div className="login-icon-box">
              {isSignup ? <UserPlus className="login-icon" /> : <LogIn className="login-icon" />}
            </div>
            <h1>{isSignup ? 'Create' : 'Welcome'} <span>{isSignup ? 'Account' : 'Back'}</span></h1>
            <p>{isSignup ? 'Join our community of professionals.' : 'Enter your credentials to access your account.'}</p>
          </div>

          {error && <div className="error-alert">{error}</div>}

          <form onSubmit={handleAuth} className="login-form">
            <div className="form-group">
              <label><Mail size={16} /> Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label><Lock size={16} /> Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            {!isSignup && (
              <div className="form-footer">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-pass">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : (isSignup ? 'Sign Up' : 'Sign In')} <ArrowRight size={18} />
            </button>
          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-auth">
            <button className="social-btn glass" onClick={() => handleSocialLogin('github')}>
              <Github size={20} />
              <span>GitHub</span>
            </button>
            <button className="social-btn glass" onClick={() => handleSocialLogin('google')}>
              <img src="https://www.google.com/favicon.ico" alt="Google" width={20} />
              <span>Google</span>
            </button>
          </div>

          <p className="auth-footer text-center">
            {isSignup ? 'Already have an account?' : "Don't have an account?"} 
            <button className="toggle-btn" onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: radial-gradient(circle at top right, var(--surface) 0%, var(--background) 100%);
        }

        .login-container { width: 100%; max-width: 450px; }

        .login-card {
          padding: 3rem;
          border-radius: 24px;
        }

        .login-icon-box {
          width: 60px;
          height: 60px;
          background: var(--glass);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--primary);
        }

        .login-header h1 { font-size: 2rem; margin-bottom: 0.5rem; }
        .login-header p { margin-bottom: 2rem; }

        .error-alert {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid var(--error);
          color: var(--error);
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          text-align: center;
        }

        .login-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.8rem; }
        .form-group label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }
        .form-group input {
          padding: 0.8rem 1rem;
          background: var(--background);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          outline: none;
        }

        .form-group input:focus { border-color: var(--primary); }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }

        .remember-me { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: var(--text-muted); }
        .forgot-pass { color: var(--primary); font-weight: 600; }

        .divider {
          text-align: center;
          position: relative;
          margin: 2rem 0;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--glass-border);
          z-index: 1;
        }

        .divider span {
          background: var(--surface);
          position: relative;
          z-index: 2;
          padding: 0 1rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .social-auth { display: flex; gap: 1rem; margin-bottom: 2rem; }
        .social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 0.8rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .auth-footer { margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted); }
        .toggle-btn { 
          background: none;
          border: none;
          color: var(--primary); 
          font-weight: 600; 
          cursor: pointer;
          margin-left: 0.5rem;
          font-size: 0.9rem;
        }
        .toggle-btn:hover { text-decoration: underline; }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Login;
