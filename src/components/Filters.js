// Filters.js
import React from 'react';

const Filters = ({ filter, onFilterChange }) => (
  <div className="filters">
    <label>
      Status:
      <select name="status" onChange={onFilterChange} value={filter.status}>
        <option value="">All</option>
        <option value="acknowledged">Acknowledged</option>
        <option value="resolved">Resolved</option>
        <option value="triggered">Triggered</option>
      </select>
    </label>
    <label>
      Urgency:
      <select name="urgency" onChange={onFilterChange} value={filter.urgency}>
        <option value="">All</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
    </label>
  </div>
);

export default Filters;
