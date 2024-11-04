// Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('renders the Dashboard component with Filters and Incident list', () => {
  const mockIncidents = [{ id: '1', title: 'Test Incident', status: 'triggered', urgency: 'high' }];
  const mockFilter = { status: '', urgency: '' };
  const mockOnFilterChange = jest.fn();

  render(
    <Dashboard incidents={mockIncidents} filter={mockFilter} onFilterChange={mockOnFilterChange} />
  );

  const filtersElement = screen.getByLabelText(/Status:/i); // Targets the label in Filters component
  const incidentTitle = screen.getByText(/Test Incident/i);

  expect(filtersElement).toBeInTheDocument();
  expect(incidentTitle).toBeInTheDocument();
});
