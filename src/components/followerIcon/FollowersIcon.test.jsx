import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FollowersIcon } from "./FollowersIcon";

describe('FollowersIcon components', () => {
    it('should render a followers icon of a personita', () => {
        render(<FollowersIcon />)
        expect(screen.getByTestId('followers-icon')).toBeInTheDocument()
    });
});