import { useEffect, useState } from 'react';
import { Icon } from '@iconify-icon/react';
import axios from 'axios';

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
    const [products, setProducts] = useState([])
    const getProducts = async () => { axios.get('/products').then((res) => setProducts(res.data)) }
    useEffect(() => { getProducts() }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addProduct = (event: any) => {
        event.preventDefault()
        let inputs: any = { 0: 'type', 1: 'title', 2: 'description', 3: 'price' }
        let data: any = { type: '', title: '', description: '', price: 0 }
        for(let i = 0; i <= 3; i++) { data[inputs[i]] = event.target[i].value }
        axios.post('/products', data).then(() => console.log('OK'))
        console.log('OK')
    }

    return (
        <>
            <SideBar />

            <Container style={{ padding: '30px 0px' }}>
                <Breadcrumb data-bs-theme="dark">
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item active>Products</Breadcrumb.Item>
                </Breadcrumb>
                <p style={{ color: '#fff', fontSize: '40px', height: '45px' }}>Products</p>
                <p style={{ color: '#808080', fontSize: '20px' }}>View, edit and delete any products in one click!</p>
            </Container>

            <Container style={{ padding: '0px' }} >
                <Card data-bs-theme="dark">
                    <Card.Body>
                        <Stack direction="horizontal">
                            <Card.Title>Products <span style={{ color: '#808080', fontSize: '15px' }}>({ products.length } products)</span></Card.Title>
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
                                { products.map((product: any) => (
                                    <tr key={ product.id }>
                                        <td>{ product.id }</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>

            <Modal style={{ color: '#fff' }} data-bs-theme="dark" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a product</Modal.Title>
                </Modal.Header>
                <Form onSubmit={ addProduct }>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="addProductModalType">
                            <Form.Label>Type</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="smartphone">Smartphone</option>
                                <option value="computers">Computers</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addProductModalTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Example: super mega top smartphone" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="addProductModalDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control style={{ minHeight: '70px', maxHeight: '200px' }} as="textarea" required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="addProductModalDescription">
                            <Form.Label>Price</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control type="number" required />
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>Close</Button>
                    <Button type="submit" variant="primary">Add</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}