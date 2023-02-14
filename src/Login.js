import { Container, Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useState } from "react";
import styled from "styled-components";

const Styles = styled.div`
    * {
       width: 500px; 
    }
`

async function loginUser(credentials) {
    return fetch('https://localhost:7290/api/authenticate/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
        localStorage.setItem("email", email);
    }
    return (
        <Container className="">
            <Form
                onSubmit={handleSubmit}
                className="mt-5 d-flex flex-column align-items-center"
            >
                <Styles>
                    <strong className="h4">Войдите в учётную запись, пожалуйста</strong>
                    <Form.Group className="mt-3 mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Styles>
            </Form>
        </Container>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}