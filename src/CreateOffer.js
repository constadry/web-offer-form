import React from "react";
import { useState } from 'react';
import { useRef } from "react";

import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    * {
       width: 500px; 
    }
`

export function CreateOffer() {
    const [message, setMessage] = useState("");
    const formElement = useRef(null);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = Array.from(formElement.current.elements)
                .filter((input) => input.name)
                .reduce(
                    (obj, input) => Object.assign(obj, { [input.name]: input.value }),
                    {}
                );

            console.log(JSON.stringify(data));

            let res = await fetch("https://localhost:7290/api/offer", {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(data),
            });
            if (res.status === 200) {
                setMessage("Заказ создан успешно!");
            } else {
                setMessage("Произошла ошибка при создании заказа");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <Form
                onSubmit={handleSubmit}
                ref={formElement}
                className="gap-2 mt-2 d-flex flex-column align-items-center"
            >
                <Styles>
                    <Form.Group className="mb-3" controlId="formSenderCity">
                        <Form.Label>Город отправителя</Form.Label>
                        <Form.Control
                            type="text"
                            name="senderCity"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSenderAddress">
                        <Form.Label>Адрес отправителя</Form.Label>
                        <Form.Control
                            type="text"
                            name="senderAddress"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formRecipientCity">
                        <Form.Label>Город получателя</Form.Label>
                        <Form.Control
                            type="text"
                            name="recipientCity"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formRecipientAddress">
                        <Form.Label>Адрес получателя</Form.Label>
                        <Form.Control
                            type="text"
                            name="recipientAddress"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formProductWeight">
                        <Form.Label>Вес груза</Form.Label>
                        <Form.Control
                            type="number"
                            name="productWeight"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPickupDate">
                        <Form.Label>Дата забора груза</Form.Label>
                        <Form.Control
                            type="date"
                            name="pickupDate"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </Styles>
            </Form>
        </Container>
    )
}