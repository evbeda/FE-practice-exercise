import React from "react";

export function Ticket(props) {

    const {name, price, fee, ticketInfo} = props

    console.log(!!ticketInfo);
    if (ticketInfo) {console.log(ticketInfo)};

    return (
        <div>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            {props.fee && <p>Fee: {fee}</p>}
            <p>
            <label for="card">
                <span>Amount:</span>
            </label>
            <select id="amount" name="purchase">
                { props.quantity >= 1 && <option value="1">1</option> }
                { props.quantity >= 2 && <option value="2">2</option> }
                { props.quantity >= 3 && <option value="3">3</option> }
                { props.quantity >= 4 && <option value="4">4</option> }
                { props.quantity >= 5 && <option value="5">5</option> }
            </select>
            </p>
        </div>
    )

}