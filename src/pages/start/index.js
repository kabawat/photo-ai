import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsFolderFill } from 'react-icons/bs'
import { BiPlusMedical } from 'react-icons/bi'
import axios from 'axios'
import data from '@/image-data'
import Capture from '@/components'
import Result from '@/components/Result'
const Home = () => {
    const [isUpload, setIsUpload] = useState(false)
    const [isLoad, setIsLoad] = useState(false)
    const [imgFile, setImgFile] = useState('')
    const [files, setFiles] = useState()
    const [select, setSelect] = useState()
    const [result, setResult] = useState('')
    // select image from computer 
    const changeFile = event => {
        const file = event.target.files[0]
        setFiles(file)
    }

    // upload Image file 
    const uploadFile = () => {
        const reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = function () {
            const base64String = reader.result;
            setImgFile(base64String);
        };
    }

    // select Template 
    const handleStart = () => {
        console.log(imgFile.split(',')[0])
        if (imgFile) {
            setIsUpload(true)
        }
    }


    const handleSelect = (pyload) => {
        setSelect(pyload)
    }

    const handleEnhance = (encodedImage) => {
        setResult(`data:image/webp;base64,${encodedImage}`)
        setIsLoad(false)

        // const API_KEY = 'wxn14ele941rnhtc3';

        // const formData = new FormData();
        // formData.append('sync', '1');
        // formData.append('image_base64', encodedImage);
        // formData.append('type', 'face');

        // axios.post('https://techhk.aoscdn.com/api/tasks/visual/scale', formData, {
        //     headers: {
        //         'X-API-KEY': API_KEY,
        //     },
        // }).then(response => {
        //     console.log(response.data);
        //     setResult(response?.data?.data?.image)
        //     setIsLoad(false)
        // }).catch(error => {
        //     console.log(error)
        // });
    }

    const handleGenrate = async () => {
        setIsLoad(true)
        try {
            // console.log(imgFile)
            axios.post('https://1a53-103-17-110-126.ngrok-free.app/rec', {
                image: imgFile.split(',')[1],
                choice: select
            }).then(res => {
                handleEnhance(res.data?.result)
            })
        } catch (error) {
            console.log(error?.message)
            setIsLoad(false)
        }
    }

    return (
        !result ? <>
            {
                isLoad && <div className="isLoad">
                    <div className="spinner-border text-light" role="status">
                    </div>
                </div>
            }

            {
                isUpload ? <>
                    <div className='center_main py-5 '>
                        <h1 className='text-center py-4'>Seclect the avatar to Genrate the image</h1>
                        <Container className='px-5'>
                            <Row className='justify-content-center'>

                                {
                                    data?.map((arr, ind) => {
                                        return <Col className={`${ind % 2 === 1 && 'mt-5 pt-5'}`} key={ind}>
                                            {
                                                arr?.map((Item, keys) => {
                                                    return <div key={keys + ind} className={`genrate my-3 ${select === Item?.encode ? 'selectImg' : ''}`}>
                                                        <img src={Item?.img} alt="" onClick={() => handleSelect(Item?.encode)} />
                                                    </div>
                                                })
                                            }
                                        </Col>
                                    })
                                }

                            </Row>
                            <div className="d-flex py-5">
                                <button className='btn btn-dark fs-2 start-btn' onClick={handleGenrate}>Genrate Image</button>
                            </div>
                        </Container>
                    </div>
                </> : <>
                    <div className='center_main'>
                        <h1 className='text-center py-1'>Seclect the avatar to Genrate the image</h1>
                        <Container className='px-5'>
                            <Row className='justify-content-center'>
                                <Col lg={7} className='my-4'>
                                    <div className="card p-4">
                                        <div className="imgDemo">
                                            <Capture setImgFile={setImgFile} />
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col className='my-4'>
                                    <div className="card p-4 drop">
                                        <h2 className='text-center'>Uplaod your photo</h2>
                                        <p className="text-center">Files uplaod JPG, PNG & HEIC</p>
                                        <input id='file' type="file" accept='image/*' className='d-none' onChange={changeFile} />
                                        {
                                            imgFile ? <label htmlFor='file' className="drag ">
                                                <img src={imgFile} alt="" />
                                            </label> : <label htmlFor='file' className="drag p-4">
                                                <BsFolderFill />
                                            </label>
                                        }
                                    </div>
                                    <div className="d-flex justify-content-center py-3">
                                        {files && <button className='btn btn-dark fs-2 upload-btn' onClick={uploadFile}>Upload</button>}
                                    </div>
                                </Col> */}
                            </Row>
                            <div className="d-flex py-5">
                                <button className='btn btn-dark fs-2 start-btn' onClick={handleStart} >Start Now</button>
                            </div>
                        </Container>
                    </div>
                </>
            }
        </> : <>
            <Result result={result} setResult={setResult} />
        </>
    )
}

export default Home