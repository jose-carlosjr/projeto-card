import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Img_1 from './assets/img1.png';


function App() {
  return (
    <>
      <Nav/>
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img className='img-slider' src={Img_1} alt="Image 1"/>
          </SplideSlide>
          <SplideSlide>
            <img className='img-slider' src={Img_1} alt="Image 2"/>
          </SplideSlide>
        </Splide>
        <div className="card-container">
          <span><strong>Tratamentos</strong> &nbsp; oferecidos</span>

          <div className="card-slider">
            <div className='card-slide-container'>
              <div className="card-item">
                
              </div>
              <div className="card-item">
              
              </div>
              <div className="card-item">
              
              </div>
              <div className="card-item">
              
              </div>
              <div className="card-item">
              
              </div>
              <div className="card-item">
              
              </div>
              <div className="card-item">
              
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default App
