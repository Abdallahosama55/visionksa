import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img17 from  '../../assets/image 17.png'
import img19 from '../../assets/image 19.png'
import img20 from  '../../assets/image 20.png'
import { Zoom } from 'react-reveal';

function HomePartner() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of image sources
  const slideImages = [
    img17,img19,img20,img17,img20,img19,img17,img19,img20,img17,img20,img19,img17
  ];

  return (
    <div>
      <Container className='py-5'>
      <Zoom>
        <div className='d-flex justify-content-center p-5'>
          <img src={require('../../assets/Group 1000008074.png')} alt='Logo' />
          <h2 className='text-center me-2 '>شركاء النجاح</h2>
        </div>
        </Zoom>

        <Slider {...settings}>
          {slideImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default HomePartner;
