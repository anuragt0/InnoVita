import React, { useState } from 'react';
import { FiArrowRight } from "react-icons/fi";

import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
// import ImageUpload from "./ImageUpload";



const Home = () => {

// * upload image working

const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      console.error('Please select an image to upload.');
      return;
    }
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('http://localhost:5000/api/user/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
      } else {
        console.error('Error uploading image:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

// *


  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to InnoVita
          </h1>
          <h1 className="primary-heading">
            Your Healthier Food Companion
          </h1>
          <p className="primary-text">
          At InnoVita, we're passionate about transforming your food choices into a seamless journey toward a healthier you.
          </p>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button className="secondary-button" onClick={handleUpload} >
            Upload Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
