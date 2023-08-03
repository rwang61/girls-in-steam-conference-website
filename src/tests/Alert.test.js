import { render, screen } from '@testing-library/react';
import Alert from '../pages/components/Alert';

test('renders Alert component', () => {
    render(<Alert />);

    const alertInfo = screen.getByText("Want to join the team? Apply before ");
    expect(alertInfo).toBeInTheDocument();

    const exclamationPoint = screen.getByText("!");
    expect(exclamationPoint).toBeInTheDocument();
});