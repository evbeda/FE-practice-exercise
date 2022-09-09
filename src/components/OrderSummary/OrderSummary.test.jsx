import React from 'react';
import { render, screen } from '@testing-library/react';
import { OrderSummary } from './OrderSummary';
import '@testing-library/jest-dom';

const eventToSellMock = [
    {
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
]

const ticketsInfoMock = [
    {
        id: 1,
        name: "General Ticket",
        price: 14.56,
        purchased_amount: 2,
        fee_type: "fixed",
        fee: "1.50"
    }
];

const ticketsInfoNotPurchasedMock = [
    {
        id: 1,
        name: "General Ticket",
        price: 14.56,
        purchased_amount: 0,
        fee_type: "fixed",
        fee: "1.50"
    }
];


describe("Order summary render", () => {
    it("should render event img", () => {
        render(
            <OrderSummary
            eventsToSell={eventToSellMock}
            ticketsInfo={ticketsInfoMock}
            />
        )
        expect(screen.getByTestId("img-event")).toBeInTheDocument();
    })

    it("should render title order summary", () => {
        render(
            <OrderSummary
            eventsToSell={eventToSellMock}
            ticketsInfo={ticketsInfoMock}
            />
        )
        expect(screen.getByTestId("order-sumary-h4")).toBeInTheDocument();
    })

    it("should render ticket quantity selected and price for that quantity", () => {
        render(
            <OrderSummary
            eventsToSell={eventToSellMock}
            ticketsInfo={ticketsInfoMock}
            />
        )
        expect(screen.getByTestId("ticket-quantity-name")).toBeInTheDocument();
        expect(screen.getByTestId("price-purchased")).toBeInTheDocument();
    })

    it("should render subtotal price", () => {
        render(
            <OrderSummary
            eventsToSell={eventToSellMock}
            ticketsInfo={ticketsInfoMock}
            />
        )
        expect(screen.getByTestId("subtotal")).toBeInTheDocument();
        expect(screen.getByTestId("subtotal-price")).toBeInTheDocument();
    })

    it("should render fee", () => {
        render(
            <OrderSummary
            eventsToSell={eventToSellMock}
            ticketsInfo={ticketsInfoMock}
            />
        )
        expect(screen.getByTestId("fee")).toBeInTheDocument();
        expect(screen.getByTestId("fee-price")).toBeInTheDocument();
    })

    it("should total price", () => {
        render(
            <OrderSummary
            eventsToSell={eventToSellMock}
            ticketsInfo={ticketsInfoMock}
            />
        )
        expect(screen.getByTestId("total")).toBeInTheDocument();
        expect(screen.getByTestId("total-price")).toBeInTheDocument();
    })
})
