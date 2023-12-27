import React from 'react';
import './Team.scss';

function Team() {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-members">
        {/* Example team member */}
        <div className="team-member">
          <img src="path-to-image" alt="Team Member Name" />
          <h2>Team Member Name</h2>
          <p>Position or Role</p>
        </div>
        {/* Repeat for other team members */}
      </div>
    </div>
  );
}

export default Team;
