import { useState } from 'react';
import { 
  BarChart3, Calendar, Users, MessageSquare, 
  Settings, Plus, Search, Edit2, Trash2, 
  LogOut, Bell, TrendingUp, Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { name: 'Overview', icon: BarChart3 },
    { name: 'Events', icon: Calendar },
    { name: 'Speakers', icon: Users },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
  ];

  const stats = [
    { title: 'Total Events', value: '24', icon: Calendar, color: '#3b82f6', trend: '+12%' },
    { title: 'Attendees', value: '5,842', icon: Users, color: '#f59e0b', trend: '+18%' },
    { title: 'Total Revenue', value: '$124,500', icon: TrendingUp, color: '#22c55e', trend: '+5%' },
    { title: 'Messages', value: '18', icon: MessageSquare, color: '#ef4444', trend: 'New' },
  ];

  return (
    <div className="admin-layout animate-fade-in">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar glass">
        <div className="sidebar-header">
          <div className="admin-logo">
            <Calendar size={24} />
            <span>Admin<span>Hub</span></span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => setActiveTab(item.name)}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Admin Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-search glass">
            <Search size={18} />
            <input type="text" placeholder="Search for events, users..." />
          </div>
          <div className="header-actions">
            <button className="icon-btn glass"><Bell size={20} /></button>
            <div className="admin-profile">
              <div className="profile-img"></div>
              <span>Admin User</span>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <div className="content-header">
            <div>
              <h1>{activeTab}</h1>
              <p>Welcome back, here's what's happening today.</p>
            </div>
            {activeTab === 'Events' && (
              <button className="btn btn-primary">
                <Plus size={18} /> Create Event
              </button>
            )}
          </div>

          {activeTab === 'Overview' ? (
            <div className="overview-grid">
              <div className="stats-row">
                {stats.map((stat) => (
                  <div key={stat.title} className="stat-card glass-card">
                    <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                      <stat.icon size={24} />
                    </div>
                    <div className="stat-info">
                      <p>{stat.title}</p>
                      <h3>{stat.value}</h3>
                    </div>
                    <span className="stat-trend" style={{ color: stat.trend.includes('+') ? '#22c55e' : stat.trend === 'New' ? '#ef4444' : '#f59e0b' }}>
                      {stat.trend}
                    </span>
                  </div>
                ))}
              </div>

              <div className="dashboard-charts">
                <div className="chart-container glass-card">
                  <h3>Recent Events</h3>
                  <div className="table-wrapper">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Event Name</th>
                          <th>Date</th>
                          <th>Tickets Sold</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3].map(i => (
                          <tr key={i}>
                            <td className="font-bold">Global Tech Summit 2026</td>
                            <td>June 15, 2026</td>
                            <td>450/500</td>
                            <td><span className="status-badge sold">Active</span></td>
                            <td>
                              <div className="action-btns">
                                <button className="table-btn"><Edit2 size={16} /></button>
                                <button className="table-btn delete"><Trash2 size={16} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="chart-container glass-card">
                  <h3>Recent Activity</h3>
                  <div className="activity-list">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="activity-item">
                        <div className="activity-dot"></div>
                        <div className="activity-content">
                          <p><strong>New Registration</strong> for Modern UI Workshop</p>
                          <span><Clock size={12} /> 2 hours ago</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-tab glass-card text-center">
              <p>Content for {activeTab} will appear here.</p>
            </div>
          )}
        </div>
      </main>

      <style>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: #0b0f1a;
          color: white;
        }

        .admin-sidebar {
          width: 280px;
          height: 100vh;
          position: sticky;
          top: 0;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          border-right: 1px solid var(--glass-border);
          background: rgba(15, 23, 42, 0.4);
        }

        .sidebar-header { margin-bottom: 3rem; }
        .admin-logo { font-size: 1.5rem; font-weight: 700; display: flex; align-items: center; gap: 0.8rem; }
        .admin-logo span span { color: var(--primary); }

        .sidebar-nav { flex: 1; display: flex; flex-direction: column; gap: 0.5rem; }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .nav-item:hover, .nav-item.active { background: var(--glass); color: white; }
        .nav-item.active { color: var(--primary); background: rgba(59, 130, 246, 0.1); }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          color: #ef4444;
          margin-top: auto;
        }

        .admin-main { flex: 1; display: flex; flex-direction: column; }
        .admin-header {
          height: 80px;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
        }

        .header-search { display: flex; align-items: center; gap: 1rem; padding: 0.6rem 1.2rem; border-radius: 10px; width: 400px; }
        .header-search input { background: none; border: none; color: white; width: 100%; outline: none; }

        .header-actions { display: flex; align-items: center; gap: 1.5rem; }
        .icon-btn { padding: 0.6rem; border-radius: 10px; }
        .admin-profile { display: flex; align-items: center; gap: 1rem; }
        .profile-img { width: 40px; height: 40px; background: var(--surface-light); border-radius: 50%; }

        .admin-content { padding: 2rem; flex: 1; }
        .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .content-header h1 { font-size: 2rem; }

        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem; }
        .stat-card { padding: 1.5rem; border-radius: 16px; display: flex; flex-direction: column; position: relative; }
        .stat-icon { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .stat-info p { font-size: 0.9rem; color: var(--text-muted); }
        .stat-info h3 { font-size: 1.8rem; margin: 0.2rem 0; }
        .stat-trend { position: absolute; top: 1.5rem; right: 1.5rem; font-size: 0.85rem; font-weight: 700; }

        .dashboard-charts { display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem; }
        .chart-container { padding: 2rem; border-radius: 20px; }
        .chart-container h3 { margin-bottom: 1.5rem; font-size: 1.2rem; }

        .admin-table { width: 100%; border-collapse: collapse; }
        .admin-table th { text-align: left; padding: 1rem; color: var(--text-muted); font-size: 0.9rem; border-bottom: 1px solid var(--glass-border); }
        .admin-table td { padding: 1.2rem 1rem; border-bottom: 1px solid var(--glass-border); }
        .font-bold { font-weight: 600; }

        .status-badge { padding: 0.3rem 0.8rem; border-radius: 4px; font-size: 0.8rem; font-weight: 700; background: rgba(34, 197, 94, 0.2); color: #22c55e; }

        .action-btns { display: flex; gap: 0.5rem; }
        .table-btn { padding: 0.5rem; border-radius: 6px; background: var(--glass); color: var(--text-muted); }
        .table-btn:hover { color: white; background: var(--surface-light); }
        .table-btn.delete:hover { color: #ef4444; background: rgba(239, 68, 68, 0.1); }

        .activity-list { display: flex; flex-direction: column; gap: 1.5rem; }
        .activity-item { display: flex; gap: 1rem; }
        .activity-dot { width: 10px; height: 10px; background: var(--primary); border-radius: 50%; margin-top: 0.4rem; flex-shrink: 0; }
        .activity-content p { font-size: 0.95rem; margin-bottom: 0.3rem; }
        .activity-content span { font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem; }

        .empty-tab { padding: 5rem; border-radius: 20px; }

        @media (max-width: 1200px) {
          .stats-row { grid-template-columns: 1fr 1fr; }
          .dashboard-charts { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .admin-sidebar { display: none; }
          .admin-header { padding: 0 1rem; }
          .header-search { width: 200px; }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
