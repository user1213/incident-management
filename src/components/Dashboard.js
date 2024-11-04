// Dashboard.js
import React from 'react';
import Filters from './Filters';
import IncidentCard from './IncidentCard';

const Dashboard = ({ incidents, filter, onFilterChange }) => {
  return (
    <div>
      <Filters filter={filter} onFilterChange={onFilterChange} />
      <div className="incident-list">
        {incidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
