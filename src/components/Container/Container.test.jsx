import { fireEvent, render, screen } from '@testing-library/react';
import {Container} from './Container';


jest.mock('../Card/Card', () => ({
    Card: () => (<div data-testid="card-test" />)
}));
