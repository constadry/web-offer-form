import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ModalProduct } from './Components/Product';

export function Offers() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({id: -1, senderCity: ""});
    const [show, setShow] = useState(false);

    const fecthProducts = async () => {
        let userEmail = localStorage.getItem("email"); 
        let response = await fetch('https://localhost:7290/api/offer/' + userEmail);
        if (response.ok) {
            let json = await response.json();
            setProducts(json);
        } else {
            console.log("Http error" + response.status);
        }
    }

    useEffect(() => {
        fecthProducts();
    }, []);

    function handleShow(e) {
        let productId = e.target.getAttribute('id');
        let product = products.find(x => x.id === parseInt(productId));
        console.log(product);
        setShow(true);
        setProduct(product);
    };

    return (
        <>
            <ModalProduct 
            show={show} 
            onHide={() => setShow(false)}
            product={product}/>

            <Container className="gap-2 mt-2 d-flex flex-column align-items-center">
                {products.map((product) => (
                    <Button
                        key={product.id}
                        id={product.id}
                        variant="light"
                        size="lg"
                        className="col-sm-4"
                        onClick={handleShow}
                    >
                        Заказ №{product.id}</Button>
                ))}
            </Container>
        </>
    );
}