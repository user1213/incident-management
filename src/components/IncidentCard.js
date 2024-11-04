// IncidentCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const IncidentCard = ({ incident }) => {
  const { type, status, created_at, urgency, title, incident_type } = incident;

  return (
    <div className={`incident-card urgency-${urgency || 'unknown'} status-${status || 'unknown'}`}>
      <h3>{title || 'Untitled Incident'}</h3>
      <p><strong>Status:</strong> {status || 'Unknown'}</p>
      <p>
        <span className="urgency-display">
          <strong>Urgency:</strong>
          {urgency === 'high' && <FontAwesomeIcon icon={faExclamationTriangle} className="urgency-icon" />}
          {urgency === 'low' && <FontAwesomeIcon icon={faInfoCircle} className="urgency-icon" />}
          {urgency || 'N/A'}
        </span>
      </p>
      <p><strong>Created At:</strong> {created_at || 'N/A'}</p>
      <p><strong>Type:</strong> {incident_type?.name || type}</p>
    </div>
  );
};

export default IncidentCard;
