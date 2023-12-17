import React from 'react'
import { Container } from 'react-bootstrap'
import { Fade, Zoom } from 'react-reveal'

function HomePayment() {
  return (
    <div dir='rtl' className='payment py-4'>
    <Container >
    <div className=' row   justify-content-center align-items-center  '>
    
    <div className=' col-md-6 payment-text'>
    
    <Container>
    <Fade right>
    <h2 className=' p-2'> وسائل دفع سهلة <span>و متعددة </span> </h2>
    <p className='p-2'>نفخر بتقديم خيارات دفع متعددة وآمنة تجعل عملية الشراء سهلة ومريحة لجميع عملائنا.
    </p>
    </Fade>
    <div>
    <h5>نستقبل مدفوعاتكم على</h5>
    <div className=' d-flex mt-3'>
    <Zoom>
    <img src={require('../../assets/mada_mini.png.png')}/>
    </Zoom>
    <Zoom>
    <img src={require('../../assets/credit_card_mini.png.png')}/>
    </Zoom>
    <Zoom>
    <img src={require('../../assets/apple_pay_mini.png.png')}/>
    </Zoom>
    <Zoom>
    <img src={require('../../assets/image 181.png')}/>
    </Zoom>
    
    
    </div>
    
    
    </div>
   

    </Container>
    
    </div>
        
    <div className=' col-md-6'>
    <Fade left>
    <div className=' d-flex justify-content-center align-items-center'>
    <img src={require('../../assets/feature_2.png.png')}/>
    
    
    </div>
    </Fade>
    
    </div>
    </div>
    
    
    
    
    </Container>
    
    </div>
  )
}

export default HomePayment