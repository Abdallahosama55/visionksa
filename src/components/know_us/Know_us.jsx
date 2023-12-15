import React from 'react'
import { Container} from 'react-bootstrap'
import { Zoom , Fade} from 'react-reveal'

function Know_us() {
  return (
    <div>
    <Container dir='rtl' className=' container mt-5 pt-2 '>
    
    <div className=' row justify-content-center align-items-center mt-3 '>
    <div  className=' col-md-7'>
    <div className=" container ">
    <div className=' d-flex  justify-content-start align-items-center '>
    <Zoom>
    <img src={require('../../assets/Group 1000008075.png')} width={50} height={50}/>

    <h2 className='p-3'>من نحن؟</h2>
    </Zoom>
    </div>
 <Fade right>
    
  
    <p className=' w-100 '>فيجن للخدمات اللوجستية نفخر بكوننا أحد الرواد في تقديم الخدمات اللوجستية داخل المملكة العربية
    السعودية ، كما أنه لدينا عدة شراكات و اتفاقيات مع شركات كبرى في مجال خدمات الشحن و التوصيل .
   هدفنا دائماً تحقيق أفضل جودة بأفضل الأسعار ، كما نهتم دائماً بتحقيق أفضل مستوى في
    خدمات العملاء و خدمات ما نتطلع دائماً نحن و فريق العمل ان تكون جميع العمليات لدينا سلسة
   </p>
   </Fade>
    </div>
    </div>
    <div className=' col-md-3 img-vector'>

    <div className=' row justify-content-center  align-items-center  '>
    <div className='col-12'>
    <Zoom>
    <img src={require('../../assets/image 183.png')} className=' w-100'/>
    </Zoom>

    </div>
   
    </div>

    </div>
    
  
    
    </div>

    </Container>
    
    
    </div>
  )
}

export default Know_us