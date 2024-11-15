import React from 'react'
import './style/UserWelcome.css'

const UserWelcome = ({currentUser}) => {
  return (
    <div className="user-status-container">
  {!currentUser ? (
    <h1 className="user-status-text">No one is logged in</h1>
  ) : (
    <div>
      <h1 className="user-status-text">Welcome, <span className="username">{currentUser.username}</span></h1>
      {currentUser.isAdmin ? (
        <p className="user-status-text">You are logged in as an Admin.</p>
      ) : (
        <p className="user-status-text">You are logged in as a Normal User.</p>
      )}
    </div>
  )}
</div>

  )
}

export default UserWelcome