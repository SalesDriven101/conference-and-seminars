import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loader-box">
        <Loader2 className="spinner" size={48} />
        <p>Loading SummitSphere...</p>
      </div>
      <style>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background);
          z-index: 2000;
        }

        .loader-box {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .spinner {
          color: var(--primary);
          animation: spin 1s linear infinite;
        }

        .loader-box p {
          font-family: var(--font-heading);
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--text);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
