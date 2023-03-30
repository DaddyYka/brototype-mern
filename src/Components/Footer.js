import React from 'react';
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaLinkedin,
} from "react-icons/fa";
import {AiFillInstagram} from 'react-icons/ai';
import {ImMobile} from 'react-icons/im';
import {BsFillBuildingsFill, BsTelephoneForwardFill} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';
import {ImLocation2} from 'react-icons/im';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className="footer " >
        <div className="row ">
          <div className="col-md-3 text-center">
            <div>
              <h5 className="mt-5 text-white "> <h2><ImLocation2 /></h2>  Locations </h5>
              <p className="mt-5 text-white">Kochi</p>
              <p className="text-white">Kozhikode</p>
              <p className="text-white">Trivandrum</p>
              <p className="text-white">Bengaluru</p>
              <p className="text-white">Chennai</p>
              <p className="text-white">Coimbatore</p>
            </div>
          </div>
          <div className="text-white col-md-3 text-center mt-5 pt-5">
            <h5> <h2><ImMobile/></h2> For Admission related queries</h5>

            <p>Email : admissions@brototype.com</p>
            <p>Contact : +91 7034 395 811</p>
          </div>
          <div className="text-white col-md-3 text-center mt-5 pt-5">
            <h5> <h2><BsTelephoneForwardFill/></h2> For Official queries</h5>

            <p>Email : talk@brototype.com</p>
            <p>Contact : +91 7034 395 811</p>
          </div>
          <div className="text-white col-md-3 text-center mt-5 pt-5">
            <h5> <h2><BsFillBuildingsFill/></h2> Headquarters</h5>
            <p>Kochi</p>
            <p>Edathuruthikaran Holdings, 10/450-2,</p>
            <p>Kundanoor, Maradu, Ernakulam,</p>
            <p>Kerala 682304</p>
          </div>
        </div>
        <div className="row">
          <h1 className="icons justify-content-center d-flex">
            <div>
            <FaFacebookSquare />
            </div>
            <div className='mx-5'>
            <AiFillInstagram />
            </div>
            <div>
            <FaWhatsappSquare />
            </div>
            <div className='mx-5'>
            <FaLinkedin />
            </div>
            <div>
            <TfiYoutube/>
            </div>
          </h1>
        </div>
        <div className="row">
          <div>
            <p className="text-center mt-5 mb-5 ">
              <Link to="/about" className='text-white'>About Us</Link> 
              <Link to="/contact" className='text-white mx-4'>Contact Us</Link> 
              <Link to="/policy" className='text-white'>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer