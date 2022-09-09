import React from 'react';
import { render, fireEvent, screen, } from '@testing-library/react';
import { FormTickets } from './FormTickets'
import '@testing-library/jest-dom'

const eventId = 1; 
const tickets = [
    {
        id: 1,
        quantity: 0,
        price: 14.56,
        name: "General Ticket",
        fee_type: "fixed",
        fee: "1.50"
      },
      {
        id: 2,
        quantity: 50,
        price: 35.0,
        name: "VIP Ticket",
        fee_type: "percent",
        fee: "5"
      },
      {
        id: 3,
        quantity: 5,
        price: 35.0,
        name: "VIP Ticket",
        fee_type: "none"
      }
]

const ticketsInfo = [
    {
        id: 1,
        name: "General Ticket",
        price: 14.56,
        purchased_amount: 0,
        fee_type: "fixed",
        fee: "1.50"
    },
    {
        id: 2,
        name: "VIP Ticket",
        price: 35.0,
        purchased_amount: 0,
        fee_type: "percent",
        fee: "5"
    },
    {
        id: 3,
        name: "VIP Ticket",
        price: 35.0,
        purchased_amount: 0,
        fee_type: "none"
    }
];


const setTicketsInfo = jest.fn();
const changeQuantityTicket = jest.fn();
const handleCloseModal = jest.fn();


const oneTicket = [
    {
        id: 1,
        quantity: 5,
        price: 14.56,
        name: "General Ticket",
        fee_type: "fixed",
        fee: "1.50"
    }
]

const oneTicketInfo = [
    {
        id: 1,
        name: "General Ticket",
        price: 14.56,
        purchased_amount: 0,
        fee_type: "fixed",
        fee: "1.50"
    }
]

describe("Form tickets", () => {

    it("should render checkout button", () => {
        render(
            <FormTickets
            eventId={eventId}
            tickets={tickets}
            ticketsInfo={ticketsInfo}
            setTicketsInfo={setTicketsInfo}
            changeQuantityTicket={changeQuantityTicket}
            handleCloseModal={handleCloseModal}
            />
        )
        expect(screen.getByTestId("button-form")).toBeInTheDocument();
        expect(screen.getByTestId("button-form")).toBeDisabled();
    })

    it("should render selects", () => {
        render(
            <FormTickets
            eventId={eventId}
            tickets={tickets}
            ticketsInfo={ticketsInfo}
            setTicketsInfo={setTicketsInfo}
            changeQuantityTicket={changeQuantityTicket}
            handleCloseModal={handleCloseModal}
            />
        )
        let selectsList = screen.getAllByTestId("select-form");
        selectsList.forEach(element => expect(element).toBeInTheDocument());
    })

    it("should render tickets names", () => {
        render(
            <FormTickets
            eventId={eventId}
            tickets={tickets}
            ticketsInfo={ticketsInfo}
            setTicketsInfo={setTicketsInfo}
            changeQuantityTicket={changeQuantityTicket}
            handleCloseModal={handleCloseModal}
            />
        )
        let ticketsNameList = screen.getAllByTestId("ticket-name");
        ticketsNameList.forEach(element => expect(element).toBeInTheDocument());
    })

    it("should render tickets price", () => {
        render(
            <FormTickets
            eventId={eventId}
            tickets={tickets}
            ticketsInfo={ticketsInfo}
            setTicketsInfo={setTicketsInfo}
            changeQuantityTicket={changeQuantityTicket}
            handleCloseModal={handleCloseModal}
            />
        )
        let ticketsPriceList = screen.getAllByTestId("ticket-price");
        ticketsPriceList.forEach(element => expect(element).toBeInTheDocument());
    })

    it("should render sold out for ticket quantity <= 0", () => {
        render(
            <FormTickets
            eventId={eventId}
            tickets={tickets}
            ticketsInfo={ticketsInfo}
            setTicketsInfo={setTicketsInfo}
            changeQuantityTicket={changeQuantityTicket}
            handleCloseModal={handleCloseModal}
            />
        )
        expect(screen.getByTestId("sold-out-ticket")).toBeInTheDocument();
    })
})


describe("Form with tickets selected", () => {
    it("should render button not disabled when select an option", () => {
        render(
            <FormTickets
            eventId={eventId}
            tickets={oneTicket}
            ticketsInfo={oneTicketInfo}
            setTicketsInfo={setTicketsInfo}
            changeQuantityTicket={changeQuantityTicket}
            handleCloseModal={handleCloseModal}
            />
        )
        fireEvent.change(screen.getByTestId('select-form'), { target: { value: 3 } })
        expect(screen.getByTestId("button-form")).not.toBeDisabled();
    })
})
