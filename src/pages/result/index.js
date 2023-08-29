import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <div className='center_main py-5 '>
            <h1 className='text-center py-4'>Your Photoshots is here</h1>
            <Container className='px-5'>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={4} md={6} sm={12} xs={12}>
                        <img src="/assets/assets-08.png" alt="" className='my-3' />
                    </Col>
                </Row>
                <div className="d-flex py-5 mt-4">
                    <button className='btn btn-dark fs-2 start-btn'>Download Image</button>
                </div>
            </Container>
        </div>
    )
}

export default Home