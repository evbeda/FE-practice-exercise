import { render, screen } from '@testing-library/react';
import {HeartButton} from './HeartButton';
import '@testing-library/jest-dom';
import { fillHeartIdSvg, emptyHeartIdSvg, fillHeartIdPath, emptyHeartIdPath, fillHeartDAtribute, emptyHeartDAtribute } from "./constants";


describe("test HeardButton render",()=>{
    it("span elements", ()=>{
        const clickHeartButton = (id) =>{
            return id
        }
        const id = 2;
        const following = false;
        render(<HeartButton 
                id={id}
                following={following}
                clickHeartButton={()=>{return "hi"}}
            />)
            expect(screen.getByTestId("home-image")).toBeInTheDocument();
            expect(screen.getByTestId("event-image")).toBeInTheDocument();
            expect(screen.getByTestId("button-image")).toBeInTheDocument();
            expect(screen.getByTestId(emptyHeartIdSvg)).toBeInTheDocument();
            expect(screen.getByTestId(emptyHeartIdPath)).toBeInTheDocument();
    })
    it("span elements with true", ()=>{
        const clickHeartButton = (id) =>{
            return id
        }
        const id = 2;
        const following = true;
        render(<HeartButton 
                id={id}
                following={following}
                clickHeartButton={()=>{return "hi"}}
            />)
            expect(screen.getByTestId("home-image")).toBeInTheDocument();
            expect(screen.getByTestId("event-image")).toBeInTheDocument();
            expect(screen.getByTestId("button-image")).toBeInTheDocument();
            expect(screen.getByTestId(fillHeartIdSvg)).toBeInTheDocument();
            expect(screen.getByTestId(fillHeartIdPath)).toBeInTheDocument();
    })
})