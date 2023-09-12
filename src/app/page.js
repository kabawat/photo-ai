"use client"
// import axios from 'axios'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
// import { useCookies } from 'react-cookie'

const Page = () => {
  // const [cookie] = useCookies(['auth'])
  // const router = useRouter();
  // useEffect(() => {
  //   const getVerify = async () => {
  //     console.log('here')
  //     try {
  //       const res = await axios.get('http://localhost:2917/verify', {
  //         headers: {
  //           auth: cookie?.auth
  //         }
  //       })
  //       console.log(res)

  //     } catch (error) {
  //       router.push(`login`);
  //       console.log(error)
  //     }
  //   }
  //   if (cookie?.auth) {
  //     getVerify()
  //     console.log('here')
  //   } else {
  //     console.log('error')
  //     router.push(`login`);
  //   }
  // }, [])
  const data = [
    {
      id: 1,
      img: '/assets/1.png',
    },
    {
      id: 2,
      img: '/assets/2.png',
    },
    {
      id: 3,
      img: '/assets/3.png',
    },
    {
      id: 4,
      img: '/assets/4.png',
    },
    {
      id: 5,
      img: '/assets/5.png',
    },
    {
      id: 6,
      img: '/assets/6.png',
    },
    {
      id: 7,
      img: '/assets/7.png',
    },
    {
      id: 8,
      img: '/assets/8.png',
    },
  ]

  return (
    <div className="main">
      <Container>
        <Row className='py-5'>
          <Col xxl={6} xl={6} lg={12} md={12} sm={12} xs={12}>
            <img src="/assets/logo.png" alt="" />
          </Col>
          <Col xxl={6} xl={6} lg={12} md={12} sm={12} xs={12}>
            <img src="/assets/logo-01.png" alt="" />
          </Col>
        </Row>

        <Row>
          {
            data?.map((item, keys) => {
              return <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={12} key={keys} className='py-4'>
                <Card>
                  <img src={item?.img} alt="" />
                </Card>
              </Col>
            })
          }
        </Row>
        <div className="d-flex justify-content-center py-4">
          <Link href='/start' className='btn btn-success start-btn'>Start Now</Link>
        </div>
      </Container>
    </div>
  )
}

export default Page