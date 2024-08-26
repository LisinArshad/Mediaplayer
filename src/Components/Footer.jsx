import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    
        <div className='bg-light text-dark container-fluid p-3'>
          <Row>
            <Col sm={12} md={5}>
                 <h3>MediaPlayer</h3> 
                 <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque veritatis quod nulla tempore blanditiis accusantium? Magni temporibus debitis asperiores unde consequatur praesentium reprehenderit cumque autem enim amet. Laboriosam, possimus id.</p>
            </Col>
            <Col sm={12} md={2}>
                 <h3>Links</h3>
                 <div className='d-flex flex-column'>
                   <Link style={{textDecoration:'none', color:'blue'}} to={'/'}>Landing</Link>
                   <Link style={{textDecoration:'none', color:'blue'}} to={'/home'}>Home</Link>
                   <Link style={{textDecoration:'none', color:'blue'}} to={'/his'}>Watch History</Link>
                 </div>

             </Col>
             
            <Col sm={12} md={5}>
            <h3>FeedBack</h3>
            <textarea className='form-control' name="" id=""></textarea>
            <button className='btn btn-success mt-2'>Send</button>
            </Col>
          </Row>
          <h6 className='text-center mt-4'>MediaPlayer &copy; 2024</h6>
        </div>

    </>
  )
}

export default Footer
