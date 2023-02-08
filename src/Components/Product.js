import { Modal } from "react-bootstrap";
import { React } from "react";


export function ModalProduct(props) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={props.show} centered>
                <Modal.Header closeButton onClick={props.onHide}>
                    <Modal.Title>Заказ №{props.product.id}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p><b>Город отправителя:</b> {props.product.senderCity}</p>
                    <p><b>Адрес отправителя:</b> {props.product.senderAddress}</p>
                    <p><b>Город получателя:</b> {props.product.recipientCity}</p>
                    <p><b>Адрес получателя:</b> {props.product.recipientAddress}</p>
                    <p><b>Вес груза:</b> {props.product.productWeight}</p>
                    <p><b>Дата забора груза:</b> {props.product.pickupDate}</p>
                </Modal.Body>
            </Modal>
        </div>
    )
} 