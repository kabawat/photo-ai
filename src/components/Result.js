import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Result = ({ result, setResult }) => {
    return (
        <div className='center_main py-5 '>
            <h1 className='text-center'>Your Photoshots is here</h1>
            <Container className='px-5'>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={8} md={6} sm={12} xs={12}>
                        <div className="finalImag">
                            <img src={result} alt=""/>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex py-5">
                    <button className='btn btn-dark fs-2 start-btn' onClick={() => setResult('')}>Re-generate</button>
                    <a href={result} download="Image" className='btn btn-dark fs-2 start-btn' >Download Image</a>
                </div>
            </Container>
        </div>
    )
}

export default Result