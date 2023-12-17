import React from 'react'
import { Container } from 'react-bootstrap'
import { Fade, Zoom } from 'react-reveal'

function HomeOurVision() {
  return (
    <div dir=' rtl'>
    <div className=' container mt-3 pb-5 '>
    <div className=' row justify-content-center  '>
    
    <div className='col-md-4 '>
    <Fade right >
    <div className=' d-flex justify-content-center align-items-center p-3 '>
    <img src={require('../../assets/Rectangle 25611.png')}/>
    
    </div>
    </Fade>
    </div>
    <div className='col-md-8'>
 <div className=' d-flex pb-4 pt-4 title-sec3'>
 <img src={require('../../assets/right 1.png')}/>
 <h2>رؤيتنا</h2>
 </div>


 <div className=' d-flex align-items-center home-sec3 '>
 <Zoom>
 <img src={require('../../assets/Ellipse 2449.png')} width={10} height={10} />
 <h5 className='me-2 span-sec3'> بكم نسمو و نرتقي  <span className='m-2'>في خدمتكم</span></h5>
 </Zoom>

 </div>
 <Zoom>
<p className=' vsion-paragraph py-2'>المساهمة في تحسين مستوى الخدمات والشحن والتوصيل داخل المملكة وان نقدم المزيد من الدعم للمتاجر الالكترونية لتوسع خدماتها داخل وخارج المناطق وبسعر مناسب وجودة توصيل عالية في الخدمة والوقت</p>
</Zoom>
    </div>
    
    </div>
    
    
    </div>
    
    
    </div>
  )
}

export default HomeOurVision