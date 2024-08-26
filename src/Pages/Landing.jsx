import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
     <div className=' container-fluid p-3 d-flex align-items-center container-fluid' style={{height:'85vh'}}>
        <Row>
          <Col md={6} sm={12}>
            <h3 className='text-warning'>
              <i className="fa-solid fa-radio" style={{ color: '#FFD43B' }}></i>
              MediaPlayer 2024
            </h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi dignissimos iste natus voluptatum saepe accusantium recusandae sit, rem in placeat blanditiis animi omnis, maiores soluta error dolores laudantium. Repudiandae.</p>
            <div className='d-grid py-3'>
          <Link to={'/home'} className="btn btn-success fw-bold">Let's Go..</Link>
            </div>
            </Col>
          <Col md={6} sm={12}>
          <img src="https://png.pngtree.com/background/20230625/original/pngtree-blue-background-media-player-buttons-illustrated-in-3d-render-picture-image_4039094.jpg" alt="" className='img-fluid rounded' />
          </Col>
        </Row>
     </div>

      <h2 className='text-center mt-3 '>Features</h2>

      <div className='d-flex justify-content-around py-5'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdn.pixabay.com/animation/2023/03/24/18/16/18-16-28-807_512.gif" />
      <Card.Body>
        <Card.Title>Upload Youtube Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/469998/screenshots/2325648/output_bsrh32.gif" />
      <Card.Body>
        <Card.Title>Add Categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://media.tenor.com/0lweCAr96fkAAAAj/todo-lista.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>

      <div className='container-fluid'>

       <Row>
             <Col sm={12} md={7}>
               <h3>Simple And Faster</h3>
               <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id suscipit, asperiores distinctio fugit necessitatibus, iste inventore tempore tempora cum praesentium! Ipsam molestias illum dolorem illo quasi vitae porro ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos nisi ipsum eum omnis asperiores illo illum libero, impedit recusandae dolore laudantium ipsa culpa nemo perferendis sint dolores. Expedita, amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit esse officia autem. Est obcaecati modi tempora repellendus. Quae, maxime. Accusantium quia tempore minima nam nobis, at quibusdam vel corporis ducimus!</p>
               
             </Col>

             <Col sm={12} md={5}>
             <iframe width="400" height="315" src="https://www.youtube.com/embed/QFaFIcGhPoM?si=WIKQ7u6Ktnp1qicK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </Col>
       </Row>
            

  </div>

    </>
  )
}

export default Landing
