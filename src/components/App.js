// App.js
import React, { useState, useEffect, useRef } from 'react';
import { appConstants } from '../constants';
import incidentJSON from '../data/incidents.json';
import Dashboard from './Dashboard';
import '../css/style.css';

function App() {
  const [incidents, setIncidents] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ status: '', urgency: '' });
  const count = useRef(false);

  const { API_KEY, LIST_INCIDENTS_URL } = appConstants;

  useEffect(() => {
    const fetchIncidents = async (url) => {
      try {
        count.current = true;
        const res = await fetch(url, {
          headers: {
            Authorization: `Token token=${API_KEY}`,
            Accept: "application/vnd.pagerduty+json;version=2",
            "Content-Type": "application/json",
          }
        });

        // Handle HTTP errors (non-200 status codes)
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Incident not found.");
          } else {
            throw new Error(`Error: ${res.statusText}`);
          }
        }

        const data = await res.json();

        // Handle case where there are no incidents in the response
        if (data.incidents && data.incidents.length > 0) {
          setIncidents(data.incidents);
        } else {
          throw new Error("No incidents available. Loading from JSON");
        }
      } catch (err) {
        console.error("Error fetching incidents:", err);

        // Check if it's a network error
        if (err.message === "Failed to fetch") {
          setError("Network error: Unable to reach the API.");
        } else {
          setError(err.message);
        }

        // Fallback to local JSON data if fetching fails
        setIncidents(incidentJSON.incidents);
      }
    };

    if (!count.current) {
      fetchIncidents(LIST_INCIDENTS_URL);
    }
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const filteredIncidents = incidents.filter((incident) => {
    const matchesStatus = filter.status ? incident.status === filter.status : true;
    const matchesUrgency = filter.urgency ? incident.urgency === filter.urgency : true;
    return matchesStatus && matchesUrgency;
  });

  return (
    <div className="content">
      <h1>Incident Management Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <Dashboard
        incidents={filteredIncidents}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
