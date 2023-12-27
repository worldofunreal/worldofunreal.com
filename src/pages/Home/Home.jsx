import React from 'react';
import './Home.scss';
import Button from '../../components/Button/Button';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to the <strong>Metaverse</strong> In World of Unreal</h1>
        <p>We make video games, dapps, and tools for Web3.</p>
        <div className="social-icons">
          {/* Placeholder for social media icons */}
          <img src="src/assets/svgs/x.svg" className="social-icon"/>
          <img src="src/assets/svgs/linkedin.svg" className="social-icon"/>
          <img src="src/assets/svgs/github.svg"className="social-icon"/>
        </div>
        <Button text="Our Creations" />
      </section>
    </div>
  );
}

export default Home;
