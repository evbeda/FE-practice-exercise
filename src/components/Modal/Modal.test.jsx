
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';
import '@testing-library/jest-dom';


const changeQuantityTicketMock = jest.fn();
const eventToSellMock = {
    id: 2,
    eventName: "Fulbacho con Exe",
    description: "C adipiscing elit. Curabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
    imageUrl: "Exe.png",
    startDatetime: "2022-09-09T13:45:00Z",
    endDateTime: "2022-11-15T16:00:00Z",
    venue: "12345 Fake St.",
    followers: 14567,
    followByMe: false,
    tickets: [
      {
        id: 1,
        quantity: 18,
        price: 14.56,
        name: "General Ticket",
        fee_type: "fixed",
        fee: "1.50"
      }
    ]
}

const showModalMock = true;
const handleCloseModalMock = jest.fn();

describe("Test modal", () => {
    it("should render event title", () => {
        render(
            <Modal 
            changeQuantityTicket={changeQuantityTicketMock}
            eventsToSell={eventToSellMock}
            showModal={showModalMock}
            handleCloseModal={handleCloseModalMock}
            />
        )
        expect(screen.getByTestId("event-name-modal")).toBeInTheDocument();
    })

    it("should render event date", () => {
        render(
            <Modal 
            changeQuantityTicket={changeQuantityTicketMock}
            eventsToSell={eventToSellMock}
            showModal={showModalMock}
            handleCloseModal={handleCloseModalMock}
            />
        )
        expect(screen.getByTestId("event-date-modal")).toBeInTheDocument();
    })

    it("should render powered by eventbrite", () => {
        render(
            <Modal 
            changeQuantityTicket={changeQuantityTicketMock}
            eventsToSell={eventToSellMock}
            showModal={showModalMock}
            handleCloseModal={handleCloseModalMock}
            />
        )
        expect(screen.getByTestId("powered-p")).toBeInTheDocument();
        expect(screen.getByTestId("powered-eventbrite")).toBeInTheDocument();

    })

    it("should render order summary section", () => {
        render(
            <Modal 
            changeQuantityTicket={changeQuantityTicketMock}
            eventsToSell={eventToSellMock}
            showModal={showModalMock}
            handleCloseModal={handleCloseModalMock}
            />
        )
        expect(screen.getByTestId("order-section")).toBeInTheDocument();
    })

    it("should render close button", () => {
        render(
            <Modal 
            changeQuantityTicket={changeQuantityTicketMock}
            eventsToSell={eventToSellMock}
            showModal={showModalMock}
            handleCloseModal={handleCloseModalMock}
            />
        )
        expect(screen.getByTestId("icon-close-modal")).toBeInTheDocument();
    })
})