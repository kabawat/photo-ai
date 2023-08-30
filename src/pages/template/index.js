import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BiPlusMedical } from 'react-icons/bi'
const Home = () => {
    const [curImage, setCurImage] = useState('')
    const handleChange = (pyload) => {
        setCurImage(pyload)
    }
    return (
        <div className='center_main py-5 '>
            <h1 className='text-center py-4'>Seclect the avatar to Genrate the image</h1>
            <Container className='px-5'>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={3} md={8} sm={12} xs={12}>
                        <img src="/assets/assets-10.png" alt="" className='my-3' />
                    </Col>
                    <Col lg={2} md={4} sm={12} xs={12} className='fontPlus justify-content-center align-items-center d-flex'>
                        <BiPlusMedical />
                    </Col>
                    <Col lg={7} md={12} sm={12} xs={12}>
                        <Row>
                            <Col>
                                <img src="/assets/assets-02.png" alt="" className='my-3' onClick={() => handleChange('1')} />
                                <img src="/assets/assets-06.png" alt="" className='my-3' onClick={() => handleChange('2')} />
                            </Col>
                            <Col className='mt-5'>
                                <img src="/assets/assets-04-Copy.png" alt="" className='my-3' onClick={() => handleChange('3')} />
                                <img src="/assets/assets-05.png" alt="" className='my-3' onClick={() => handleChange('4')} />
                            </Col>
                            <Col>
                                <img src="/assets/assets-09.png" alt="" className='my-3' onClick={() => handleChange('5')} />
                                <img src="/assets/assets-03.png" alt="" className='my-3' onClick={() => handleChange('6')} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="d-flex py-5 mt-4">
                    <Link href='/result' className='btn btn-dark fs-2 start-btn'>Genrate Image</Link>
                </div>
            </Container>
        </div>
    )
}

export default Home


// endpoint
// https://71dc-103-17-110-126.ngrok-free.app/rec
// {'image': base64 encoded image, choice:1 to 5}


// result
// result={"errorcode":0 to 1, result: image encode base65 }