import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsFolderFill } from 'react-icons/bs'
const Home = () => {
    return (
        <div className='center_main py-5 '>
            <h1 className='text-center py-4'>Seclect the avatar to Genrate the image</h1>
            <Container className='px-5'>
                <Row>
                    <Col lg={7}>
                        <div className="card p-4">
                            <div className="imgDemo">
                                <img src="/assets/assets-12.png" alt="" />
                            </div>
                            <div className="d-flex pt-3">
                                <button className='btn btn-dark fs-2 start-btn'>Capture</button>
                                <button className='btn btn-dark fs-2 start-btn'>Retake</button>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className="card p-4 drop">
                            <h2 className='text-center'>Uplaod your photo</h2>
                            <p className="text-center">Files uplaod JPG, PNG & HEIC</p>
                            <div className="drag p-4">
                                <BsFolderFill />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center py-3">
                            <button className='btn btn-dark fs-2 upload-btn '>Upload</button>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex py-5 mt-4">
                    <Link href='/template' className='btn btn-dark fs-2 start-btn'>Start Now</Link>
                </div>
            </Container>
        </div>
    )
}

export default Home