import React from 'react';
import './Home.css';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HomeService from '../../components/HomeService/HomeService';
import HomeOurVision from '../../components/HomeOurVision/HomeOurVision';
import HomePayment from '../../components/HomePayment/HomePayment';
import HomePartner from '../../components/HomePartner/HomePartner';

function openGooglePlay() {
  window.open('https://play.google.com/store/apps', '_blank');
}

function openAppStore() {
  window.open('https://www.apple.com/app-store/', '_blank');
}

function openWhatsUp() {
  window.open('https://web.whatsapp.com/', '_blank');
}

function Home() {
  return (
    <div dir='rtl'>
      <HomeBanner/>
      <HomeService/>
      <HomeOurVision/>
      <HomePayment/>
      <HomePartner/>
    </div>
  );
}

export default Home;