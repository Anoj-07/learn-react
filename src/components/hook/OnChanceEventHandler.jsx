// ! onChange:
// event handler used primarily with form elemets. example: <input>, <textarea>, <select>, <radio> Triggers a function every time the value of the input changes 

import React, { useState } from 'react'

function OnChanceEventHandler() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('Delivery');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleCommnetChange = (e) => {
        setComment(e.target.value)
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value)
    }

    return (
        <>
        <section>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <textarea value={comment} onChange={handleCommnetChange} placeholder="comment" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select payment options</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Cash">Cash</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input type="radio" value="Pick Up" checked={shipping == 'Pick Up'} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br />
            <label htmlFor="">
                <input type="radio" value="Delivery" checked={shipping == 'Delivery'} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </section>
            
        </>
    );
}

export default OnChanceEventHandler

// 2:10:31