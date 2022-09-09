import { act, fireEvent, render, screen } from '@testing-library/react';
import {Container} from './Container';
import '@testing-library/jest-dom';
import React from 'react';



jest.mock('../Modal/Modal', () => ({
    Modal: () => (<div data-testid="modal-test" />)
}));



describe("Container page", ()=>{
    const testFunction = ()=>{
        return {payload:[{id:1}]}
    }

    let useEffect;
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
      };

    it("header render",()=>{
        render(<Container eventStorage={[]} getAllEvents={testFunction} />)
        expect(screen.getByTestId("header")).toBeInTheDocument();
    })
    it("title render",()=>{
        render(<Container eventStorage={[]} getAllEvents={testFunction} />)
        expect(screen.getByTestId("events-title")).toBeInTheDocument();
    })
    it("imagen render",()=>{
        render(<Container eventStorage={[]} getAllEvents={testFunction} />)
        expect(screen.getByTestId("home-image")).toBeInTheDocument();
    })
    it("svg render",()=>{
        render(<Container eventStorage={[]} getAllEvents={testFunction} />)
        expect(screen.getByTestId("svg")).toBeInTheDocument();
    })
    beforeEach(() => {
        
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect(); // 2 times
    });
    it("show cards",() =>  {

        // const rendered = render(<Container getAllEvents={testFunction} />)
        act(() => {
            useEffect = jest.spyOn(Container, "getAllEvents");
            render(<Container getAllEvents={testFunction} />)
        });

          
        expect(screen.getByTestId("card-component")).toBeInTheDocument();
    })
    //como probar que el state show modal se active y muestre el modal
})
