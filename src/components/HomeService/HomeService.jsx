import React from 'react'
import { Container } from 'react-bootstrap'
import img1 from '../../assets/Rectangle 25620.png'
import img2 from '../../assets/Rectangle 25619.png'
import img3 from '../../assets/Rectangle 25618.png'
import { Zoom } from 'react-reveal'
function HomeService() {
    const items = [
        { id: 1, title: 'توصيل سريع' ,describtion:'توصيل داخل المدن خلال 24 ساعة',imgSrc:img3},
        { id: 2, title: 'شحن لجميع المدن',describtion:'الشحن لجميع مدن المملكة في 5 ايام',imgSrc:img2 },
        { id: 3, title: 'منتجات التغليف' ,describtion:'توفير وبيع منتجات التغليف', imgSrc:img1},
      ];
  return (
    <div className=' mt-5 py-5'>
    <Container >
    <div className=' d-flex justify-content-center align-items-center p-4'>
    <img src={require('../../assets/Group 1000008073.png')}></img>
    <h2 className=' text-center'>خدماتنا</h2>
    </div>
    <div className=' row justify-content-center align-items-center' >
    {items.map((item,index) => (
    <Zoom>
    <div className='col-md-4 text-center' key={index}>
    <img src={item.imgSrc}></img>
    <div className=' p-4' key={index}  >
    <h4>{item.title}</h4>
    <p className=' text-muted servivesPargraph'>{item.describtion}</p>
    
    </div>
    
 
  </div>
  </Zoom>
  ))}
    
    </div>
    
   
    
    </Container>
    
    
    </div>
  )
}

export default HomeService