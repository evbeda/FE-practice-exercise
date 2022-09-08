import { fireEvent, render, screen } from '@testing-library/react';
import {Container} from './Container';
import '@testing-library/jest-dom';


jest.mock('../Card/Card', () => ({
    Card: () => (<div data-testid="card-test" />)
}));

jest.mock('../Modal/Modal', () => ({
    Modal: () => (<div data-testid="modal-test" />)
}));

describe("Container page", ()=>{
    const testFunction = async()=>{
        return {payload:[{id:1}]}
    }

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
    it("show cards",()=>{
        render(<Container eventStorage={[{test1:1}]} getAllEvents={testFunction} />)
        expect(screen.getByTestId("card-test")).toBeInTheDocument();
    })
    //como probar que el state show modal se active y muestre el modal
})
