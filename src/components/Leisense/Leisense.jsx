import React from 'react'
import { Container} from 'react-bootstrap'
import { Zoom , Fade} from 'react-reveal'
function Leisense() {
  return (
    <div>
    <Container dir='rtl' className=' container mt-3 pt-2 '>
    
    <div className=' row justify-content-center align-items-center mt-3 '>
    <div  className=' col-md-7'>
    <div className=" container ">
    <div className=' d-flex  justify-content-start align-items-center '>
    <Zoom>
    <img src={require('../../assets/Frame (3).png')} width={50} height={50}/>

    <h3 className='p-3 fw-bolder'>السياسة والاحكام وسياسة الارجاع</h3>
    </Zoom>
    </div>
 <Fade right>
    <div className=' mt-4'>
  <h5 className=' fw-bold ' >سياسة الارجاع</h5>
    <p className=' w-100 '>
    يتم ارجاع الشحنات المرجعة الى العميل المرسل بدون اي رسوم اضافية

    
    </p>
    </div>

   </Fade>
    </div>
    </div>
    <div className=' col-md-3 img-vector'>

    <div className=' row justify-content-center  align-items-center  '>
    <div className='col-12'>
    <Zoom>
    <img src={require('../../assets/back.png')} className=' w-100'/>
    </Zoom>

    </div>
   
    </div>

    </div>
    
  
    
    </div>

    </Container>
    </div>
    
  )
}

export default Leisense