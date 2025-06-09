import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Salonmodal() {

  const [lgShow, setLgShow] = useState(false);
  const [ngShow, setNgShow] = useState(false);
  const [mgShow, setMgShow] = useState(false);

  return (
    <>

      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg" className='salon_modal'
      >

        <Modal.Body>
          <div className='salon_modal_main'>
            <h2>New appointment with Sarah</h2>

            <div className='working_calendor'>
              <img src={require('../assets/img/Content.png')} alt='' className='img-fluid' />
            </div>

            <div className='calendor_bottom'>
              <div className='calendor_b_head'>
                <h3>Botox Injections - Bunny Lines</h3>
                <p>£55.00</p>
              </div>
              <hr />
              <div className='calendor_profile'>
                <figure>
                  <img src={require('../assets/img/logo-circle.png')} alt='' className='img-fluid' />
                  <figcaption>Sarah</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>




      <Button onClick={() => setNgShow(true)}>Large modal</Button>
      <Modal
        size="lg"
        show={ngShow}
        onHide={() => setNgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg" className='salon_modal'
      >

        <Modal.Body>
          <div className='salon_modal_main'>
            <div>
              <div className='salon_nhead'>
                <NavLink to="#"> <img src={require('../assets/img/chevron-left.png')} alt='arrow' /></NavLink>
                <h2>1st September 2023</h2>
              </div>
              <div className='calendor_time'>
                <ul>
                  <li>12:00</li>
                  <li>12:15</li>
                  <li>12:30</li>
                  <li>12:45</li>
                  <li>13:00</li>
                  <li>15:00</li>
                  <li>17:00</li>
                  <li>18:00</li>
                </ul>
              </div>
            </div>
            <div className='calendor_bottom'>
              <div className='calendor_b_head'>
                <h3>Botox Injections - Bunny Lines</h3>
                <p>£55.00</p>
              </div>
              <hr />
              <div className='calendor_profile'>
                <figure>
                  <img src={require('../assets/img/logo-circle.png')} alt='' className='img-fluid' />
                  <figcaption>Sarah</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>




      <Button onClick={() => setMgShow(true)}>Large modal</Button>
      <Modal
        size="lg"
        show={mgShow}
        onHide={() => setMgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg" className='salon_modal'
      >

        <Modal.Body>
          <div className='salon_modal_main'>
            <div>
              <div className='salon_nhead'>
                <NavLink to="#"> <img src={require('../assets/img/chevron-left.png')} alt='arrow' /></NavLink>
                <h2>Confirm your booking</h2>
              </div>
              <div className='calendor_bottom'>
                <div className='calendor_b_head'>
                  <h3>Botox Injections - Bunny Lines</h3>
                  <p>£55.00</p>
                </div>
                <hr />
                <div className='calendor_profile'>
                  <figure>
                    <img src={require('../assets/img/logo-circle.png')} alt='' className='img-fluid' />
                    <figcaption>Sarah</figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className='calendor_booking'>
              <div className='book_amount'>
                <ul>
                  <li><p>Booking Total</p><p>£55.00</p></li>
                  <li><p>Booking Total</p><p>£55.00</p></li>
                </ul>
                <button type="button" class="book_now">Book Now</button>
              </div>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Salonmodal;