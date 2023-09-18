// Footer.js
import React from 'react';
import '../css/footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="trialOfferLeft">
        <div className="limitedTag">
          <p>Limited time offer</p>
        </div>
        <h1 style={{ color: 'white' }}>Claim your 7 day free trial</h1>
        <h5 className="trailOfferSubtitle">
          Get your 7 day free trial, and experience Streak without any commitment.
          You will not be charged till you choose a plan.
        </h5>
        <div className="trialOfferFeat">
          <div className="trialOfferFeatRow">
            <img src="/static/media/Tick_w_bg.ee095a99.svg" alt="0" className="trialOfferFeaTickImg" />
            <p>50 Backtests per day</p>
          </div>
          <div className="trialOfferFeatRow">
            <img src="/static/media/Tick_w_bg.ee095a99.svg" alt="1" className="trialOfferFeaTickImg" />
            <p>50 Scans per day</p>
          </div>
          <div className="trialOfferFeatRow">
            <img src="/static/media/Tick_w_bg.ee095a99.svg" alt="2" className="trialOfferFeaTickImg" />
            <p>5 Live deployments at a time</p>
          </div>
        </div>
        <button type="button" className="claimTrialBtn">
          <p className="claimTrialBtnText">Claim Now</p>
        </button>
      </div>
      <div className="footerImage">
        {/* Add your image here */}
        <div className="footerImage">
        <div className="footerImage" style={{ textAlign: 'center' }}>
  {/* Modify the image size by setting width and height */}
  <img
    src="https://innovitagroup.com/wp-content/uploads/2019/04/innovita-logo.png"
    alt="Footer Image"
    style={{marginTop:"100px", width: '600px', height: 'auto', display: 'inline-block' }} // Adjust the width as needed
  />
</div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
