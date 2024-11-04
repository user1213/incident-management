// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the App component with title', () => {
  React.act(() => {
    render(<App />)
  })
  const titleElement = screen.getByText(/Incident Management Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders error message if present', () => {
  render(<App />);
  const errorMessage = screen.queryByText(/Network error: Unable to reach the API./i);
  expect(errorMessage).toBeNull(); // Should not display error initially
});
