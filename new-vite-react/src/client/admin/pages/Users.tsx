import { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import SideBar from '../components/SideBar';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Products() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <SideBar />

            <Container style={{ padding: '30px 0px' }}>
                <Breadcrumb data-bs-theme="dark">
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item active>Users</Breadcrumb.Item>
                </Breadcrumb>
                <p style={{ color: '#fff', fontSize: '40px', height: '45px' }}>Users</p>
                <p style={{ color: '#808080', fontSize: '20px' }}>View, add, delete and edit users in one click!</p>
            </Container>

            <Container style={{ padding: '0px' }} >
                <Card data-bs-theme="dark">
                    <Card.Body>
                        <Stack direction="horizontal">
                            <Card.Title>Products <span style={{ color: '#808080', fontSize: '15px' }}>(0 products)</span></Card.Title>
                            <Stack className="ms-auto" direction="horizontal">
                                <Button onClick={handleShow} variant="light"><Icon icon="material-symbols:add" /></Button>
                            </Stack>
                        </Stack>
                        <Table style={{ marginTop: '20px' }} striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>

            <Modal style={{ color: '#fff' }} data-bs-theme="dark" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="addProductModalType">
                            <Form.Label>Type</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Select a type...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addProductModalTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Example: super mega top smartphone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addProductModalDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control style={{ minHeight: '70px', maxHeight: '200px' }} as="textarea" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="addProductModalDescription">
                            <Form.Label>Price</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control />
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}