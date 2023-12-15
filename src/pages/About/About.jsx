import React from 'react'
import { Container } from 'react-bootstrap'
import './About.css'
import Rate_services from '../../components/rate_services/Rate_services'
import Know_us from '../../components/know_us/Know_us'
function About() {
  return (
    <div className=' container_About '>
    <Container dir='rtl' className=' container  pt-2 pb-5 '>
    
<Know_us/>
<Rate_services/>
    </Container>
    
    
    </div>
  )
}

export default About