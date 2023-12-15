import React from 'react'
import { Link } from 'react-router-dom'
import './Footers.css'
function Footers() {
  return (
    <div >
    <hr/>
    <div className=' container' >
    <div className=' row p-4' dir='rtl'>
    <div className=' col-md-4'>
<div className=' row justify-content-center align-items-center '>
<div className=' col-3'>
<img src={require('../../assets/image 3.png')}/>
</div>

<div className=' col-9'>
<h6>مؤسسة رؤيا المستقبل للخدمات اللوجستية - فيجن</h6>
<p className=' text-muted '>المملكة العربية السعودية</p>
</div>
</div>
    </div>
    <div className=' col-md-4'>
    <div className=' row'>
    <div className=' col-md-2 text-center'>
    <Link to='/'>الرئيسية</Link>
    
    </div>


    <div className=' col-md-7 text-center '>
    
    <Link to='Backup'>السياسة والاحكام وسياسةالأرجاع</Link>
    
    
    </div>


<div className='col-md-3 text-center'>


<Link to='About'>من نحن ؟</Link>
    
</div>
    
   
    </div>
    
    
    </div>
  
    <div className='col-md-3 col-sm-12'>
    
    <div className=' container '>
    
    <div className=' row justify-content-center align-items-center '>
    
    <div className=' col-md-6'>
    <div className=' d-flex justify-content-center align-items-center'>
    <button className=' button-footer'></button>
    </div>
    </div>


    <div className=' col-md-6'>
    <div className=' d-flex justify-content-center align-items-center'>
    <button className=' button-footer2'></button>
    </div>
    
    </div>
    
    
    
    </div>
    
    
    </div>
    
    
    
    
    </div>
    
    </div>
    

    </div>
    
    
    </div>
  )
}

export default Footers