import React from 'react';
import { Bounce, Fade, Zoom } from 'react-reveal';


function openGooglePlay() {
  window.open('https://play.google.com/store/apps', '_blank');
}

function openAppStore() {
  window.open('https://www.apple.com/app-store/', '_blank');
}

function openWhatsUp() {
  window.open('https://web.whatsapp.com/', '_blank');
}

function HomeBanner() {
  return (
    <div dir='rtl'>
      <div className='container py-3'>
        <div className='row justify-content-right align-items-center'>
          <div className='col-md-8'>
            <div className='container'>
            <Zoom right>

              <span className='p-2'>اسرع شحن في السعودية</span>
              <h2 className='p-2'>فيجن للخدمات اللوجستية</h2>
             </Zoom>
             <Fade right>
              <p className='p-2'>
                ستستفيد من أفضل الحلول اللوجستية مع فيجن. نحن نجعل اللوجستيات تبدو سهلة، حيث نقدم خدمات متكاملة تلبي احتياجات عملك بكفاءة واحترافية. اكتشف حلاً مخصصًا للنقل والتخزين وإدارة السلسلة اللوجستية الخاصة بك، مع توفير موثوقية عالية وتكلفة تنافسية. انضم إلى عملائنا المميزين واستمتع بتجربة لوجستية فائقة الجودة مع فيجن اليوم."
              </p>
              </Fade>
            </div>
            <div className='button-group p-2'>
              <div className='d-flex w-auto justify-content-center'>
              <Bounce right>
                <div className='col'>
                  <button className='apple_btn' onClick={openAppStore}></button>
                  <button className='Goagle_btn' onClick={openGooglePlay}></button>
                </div>
                </Bounce>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
        
          <Fade></Fade>
        
            <div className='d-flex justify-content-center align-items-center container img-landing'>
            <Fade bottom >
              <img src={require('../../assets/Group 1000006479.png')} alt='Landing' />
              </Fade>
            </div>
            
          </div>
        </div>
        <Zoom>
        <button className='whatsup'  onClick={openWhatsUp}></button>
        </Zoom>
      </div>
    </div>
  );
}

export default HomeBanner;