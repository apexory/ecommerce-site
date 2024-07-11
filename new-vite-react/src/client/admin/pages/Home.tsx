import SideBar from '../components/SideBar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Home() {
    return (
        <>
            <SideBar />

            <Container style={{ padding: '30px 0px' }}>
                <Breadcrumb data-bs-theme="dark">
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>
                <p style={{ color: '#fff', fontSize: '40px', height: '45px' }}>Hello, [username]!</p>
                <p style={{ color: '#808080', fontSize: '20px' }}>What are we doing today?</p>
            </Container>

            <Container style={{ padding: '0px' }} >
                <Row style={{ gap: '20px' }}>
                    <Card data-bs-theme="dark" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>Products</Card.Title>
                            <Card.Text >
                                Hmm.. Nothing was found. Try adding an product by clicking on the button below.
                            </Card.Text>
                            <Button href="/admin/products" style={{ width: '100%' }} variant="light">Add a product</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Example..</Card.Title>
                            <Card.Text >
                                You can add even more cards!!!!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}