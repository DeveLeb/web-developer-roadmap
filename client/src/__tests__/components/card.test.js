import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '../../components/Card/card'; // Update the import path as per your project structure

describe('Card component', () => {
  test('renders children components', () => {
    render(
      <Card>
        <div>Child Component</div>
      </Card>
    );
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
