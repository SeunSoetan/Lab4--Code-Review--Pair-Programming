import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddUser from './AddUser';

describe('<AddUser /> tests', () => {
  it('render <AddUser />', () => {
    render(<AddUser />);
    userEvent.click(screen.getByText(/Add/i));
    // input name
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'Seun' },
    });
  });
});
