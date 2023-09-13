import React, { useState } from 'react';
import NavBar from './Navbar';
import '../css/home.css';

import Image1 from '../images/home-bg.png';

import { motion } from 'framer-motion'
import { textVariant } from './framer'


function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const generateReport = () => {
    setReportGenerated(true);
  };

  return (
    <>
      <NavBar />

      <div className={`container-page1`}>
        <div className='img-container'>
          <img src={Image1} className='image-top'></img>
        </div>

        <div className='container-2'>
          <div className='fade-in-from-right'>
            <motion.div variants={textVariant}
              initial="hidden"
              whileInView="show">

              <h3 className='text-top'>Welcome to InnoVita</h3>
              <p>Dive into our platform to simplify your food choices .
              </p>

            </motion.div>




            <label htmlFor="file-input" className="file-input-label">
              <input
                type="file"
                id="file-input"
                accept="image/*"
                onChange={handleImageSelect}
                className="file-input"
              />
              <div className='hero-btn-wrap'>
                <motion.a className='btn'
                  whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
                  whileTap={{ scale: 0.9, backgroundColor: "#71BF44", color: 'rgb(37, 23, 107)' }}
                >
                   Upload an Image
                </motion.a></div>
            </label>
          </div>

        </div>
      </div >
    </>

  );
}

export default HomePage;
