import React from 'react';
import DeleteStudentChild from './DeleteStudentChild';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockData from '../mockData';

describe('<DeleteStudentChild /> tests', () => {
  it('render <DeleteStudentChild />', () => {
    render(<DeleteStudentChild id={mockData[0].id}/>);
    userEvent.click(screen.getByText(/Delete/i));
  })
})