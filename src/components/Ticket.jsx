import React from "react";

export function Ticket() {

    const props ={
        "id": 1,
        "quantity": 100,
        "price": 14.56,
        "name": "General Ticket",
        "fee_type": "fixed",
        "fee": "1.50",
        "purchase": 0
    }

    const {name, price, fee} = props

    return (
        <div>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Fee: {fee}</p>
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