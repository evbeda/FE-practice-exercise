import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { FormTickets } from './FormTickets'

jest.mock('./FormTickets', () => ({
    FormTickets: () => (
        <form>
            <select name="tickets" data-testid="select"> 
                <option value="0" data-testid="select-option">0</option>
                <option value="1" data-testid="select-option">1</option>
                <option value="2" data-testid="select-option">2</option>
                <option value="3" data-testid="select-option">3</option>
                <option value="4" data-testid="select-option">4</option>
            </select>
            <button type="submit" data-testid="btn-form">Checkout</button>
        </form>
    )
}));

describe("Select ticket quantity", () => {
    it("should show the number selected", () => {
        render(<FormTickets />)
        fireEvent.change(screen.getByTestId('select'), { target: { value: 3 } })
        let options = screen.getAllByTestId('select-option');
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeTruthy();
        expect(options[4].selected).toBeFalsy();
    })
})