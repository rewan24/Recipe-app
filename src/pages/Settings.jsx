import React, { useState } from 'react'

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [username, setUsername] = useState("Rawan")

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h3 className="card-title mb-4">Settings</h3>

          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Dark Mode */}
          <div className="form-check mb-3">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="darkMode" 
              checked={darkMode} 
              onChange={() => setDarkMode(!darkMode)} 
            />
            <label className="form-check-label" htmlFor="darkMode">
              Dark Mode
            </label>
          </div>

          {/* Notifications */}
          <div className="form-check mb-3">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="notifications" 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)} 
            />
            <label className="form-check-label" htmlFor="notifications">
              Enable Notifications
            </label>
          </div>

          {/* Save Button */}
          <button className="btn btn-dark">Save Settings</button>
        </div>
      </div>
    </div>
  )
}

export default Settings