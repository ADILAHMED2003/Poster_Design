// import "./App.css";
// import html2canvas from "html2canvas";
// import nikkahImage from "./assets/nikkahimage.png"
// function App() {

//   // 🔽 DOWNLOAD FUNCTION
//   const downloadImage = async () => {
//     const element = document.getElementById("magazine");

//     const canvas = await html2canvas(element, {
//       scale: 4,              // 🔥 HIGH QUALITY
//       useCORS: true,
//       backgroundColor: "#fff",
//     });

//     const link = document.createElement("a");
//     link.download = "Magazine_Front_Page.png";
//     link.href = canvas.toDataURL("image/png", 1.0);
//     link.click();
//   };

//   return (
//     <div className="page-wrapper">

//       {/* DOWNLOAD BUTTON */}
//       <button className="download-btn" onClick={downloadImage}>
//         Download Magazine
//       </button>

//       {/* MAGAZINE PAGE */}
//       <div id="magazine" className="magazine">
//         <img src={nikkahImage}></img>

//         <h1 className="title">THE REACT TIMES</h1>
//         <p className="tagline">Design • Code • Innovation</p>

//         <div className="cover-image">
//           <span>FEATURE IMAGE</span>
//         </div>

//         <h2 className="headline">
//           How React is Changing Modern Web Design
//         </h2>

//         <p className="description">
//           Inside the journey of modern UI development using React, Vite and
//           component-based design.
//         </p>

//         <div className="footer">
//           <span>Issue #01</span>
//           <span>December 2025</span>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import html2canvas from "html2canvas";
// import nikkahImage from "./assets/nikkahimage.png";
// import "./App.css";

// function App() {
//   const downloadImage = async () => {
//     const element = document.getElementById("magazine");

//     const canvas = await html2canvas(element, {
//       scale: 4,
//       useCORS: true,
//       backgroundColor: "#fff",
//     });

//     const link = document.createElement("a");
//     link.download = "HeartConnect_Magazine.png";
//     link.href = canvas.toDataURL("image/png", 1.0);
//     link.click();
//   };

//   return (
//     <div className="page-wrapper">
//       <div className="good">
//         <button className="download-btn" onClick={downloadImage}>
//           Download Poster
//         </button>
//       </div>

//       <div id="magazine" className="magazine">
//         {/* Header Section */}
//         <div className="magazine-header">
//           <div className="header-top">
//             <span className="issue-label">SPECIAL EDITION</span>
//             <span className="date-label">2025</span>
//           </div>
//           <h1 className="magazine-title">HEARTCONNECT</h1>
//           <div className="title-underline"></div>
//           <p className="magazine-subtitle">Revolutionary Matrimonial Platform</p>
//         </div>

//         {/* Hero Image Section */}
//         <div className="hero-image-section">
//           <img src={nikkahImage} alt="HeartConnect" className="hero-image" />
//           <div className="image-overlay">
//             <h2 className="overlay-title">Where Technology Meets Tradition</h2>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="main-content">
//           <div className="intro-section">
//             <h3 className="intro-heading">Building the Future of Connections</h3>
//             <p className="intro-text">
//               A complete full-stack matrimonial platform combining modern technology
//               with secure architecture and seamless user experience.
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="features-grid">
//             <div className="feature-box primary">
//               <div className="feature-icon">🔐</div>
//               <h4>Enterprise Security</h4>
//               <p>JWT authentication & Bcrypt encryption with protected routes</p>
//             </div>

//             <div className="feature-box">
//               <div className="feature-icon">⚡</div>
//               <h4>Modern Stack</h4>
//               <p>React, Redux, Node.js, Express & MongoDB architecture</p>
//             </div>

//             {/* <div className="feature-box">
//               <div className="feature-icon">💬</div>
//               <h4>Real-Time Chat</h4>
//               <p>WebSocket integration for instant messaging</p>
//             </div> */}
//             <div className="feature-box">
//               <div className="feature-icon">🤝</div>
//               <h4>Partner Matching</h4>
//               <p>Implemented user matching with filters to find the right partners.</p>

//             </div>


//             <div className="feature-box">
//               <div className="feature-icon">📱</div>
//               <h4>Responsive UI</h4>
//               <p>Clean, structured design with Redux state management</p>
//             </div>

//             <div className="feature-box">
//               <div className="feature-icon">🎯</div>
//               <h4>Smart Forms</h4>
//               <p>Comprehensive detail collection with Multer file uploads</p>
//             </div>

//             <div className="feature-box">
//               <div className="feature-icon">🚀</div>
//               <h4>RESTful APIs</h4>
//               <p>Centralized system with custom error handling</p>
//             </div>
//           </div>

//           {/* Tech Stack Bar */}
//           <div className="tech-stack">
//             <div className="tech-label">POWERED BY</div>
//             <div className="tech-icons">
//               <span>React</span>
//               <span>Redux</span>
//               <span>Node.js</span>
//               <span>Express</span>
//               <span>MongoDB</span>
//               <span>JWT</span>
//               <span>WebSocket</span>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="magazine-footer">
//           <div className="footer-line"></div>
//           <p className="footer-content">SECURE • SCALABLE • INNOVATIVE</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import html2canvas from "html2canvas";
import nikkahImage from "./assets/nikkahimage.png";
import "./App.css";

function App() {
  const downloadImage = async () => {
    const element = document.getElementById("magazine");

    const canvas = await html2canvas(element, {
      scale: 5,
      useCORS: true,
      backgroundColor: "#fff",
    });

    const link = document.createElement("a");
    link.download = "HeartConnect_Magazine.png";
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  };

  return (
    <div className="page-wrapper">
      <button className="download-btn" onClick={downloadImage}>
        Download Poster
      </button>

      <div id="magazine" className="magazine">
        {/* Header Section */}
        <div className="magazine-header">
          <div className="header-top">
            <span className="issue-label">SPECIAL EDITION</span>
            <span className="date-label">2025</span>
          </div>
          <h1 className="magazine-title">HEARTCONNECT</h1>
          <div className="title-underline"></div>
          <p className="magazine-subtitle">Lovable Matrimonial Platform</p>
        </div>

        {/* Main Content with Image */}
        <div className="main-content">
          <div className="content-layout">
            {/* Left Side - Image */}
            <div className="image-container">
              <div className="image-frame">
                <img src={nikkahImage} alt="HeartConnect" className="feature-image" />
              </div>
              <div className="image-caption">
                <p className="caption-text">Where Technology Meets Tradition</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-content">
              <div className="intro-section">
                <h2 className="section-heading">Building the Future</h2>
                <p className="intro-text">
                  A complete full-stack matrimonial platform combining modern
                  technology with secure architecture and seamless user experience.
                </p>
              </div>

              <div className="highlight-features">
                <div className="highlight-item">
                  <span className="highlight-icon">🔐</span>
                  <div className="highlight-text">
                    <h4>Enterprise Security</h4>
                    <p>JWT & Bcrypt with protected routes</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span className="highlight-icon">⚡</span>
                  <div className="highlight-text">
                    <h4>Modern Tech Stack</h4>
                    <p>React, Redux, Node.js & MongoDB</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span className="highlight-icon">🤝</span>
                  <div className="highlight-text">
                    <h4>Partner Matching</h4>
                    <p>Implemented user matching with filters to find the right partners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-section">
            <h3 className="features-title">Core Features</h3>
            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">📱</div>
                <h4>Responsive Design</h4>
                <p>Clean UI with structured architecture</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">🎯</div>
                <h4>Smart Detail Forms</h4>
                <p>Comprehensive data with Multer uploads</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">🚀</div>
                <h4>RESTful APIs</h4>
                <p>Centralized with error handling</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">🔄</div>
                <h4>Redux State</h4>
                <p>Global state management system</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Bar */}
          {/* <div className="tech-stack">
            <div className="tech-label">POWERED BY</div>
            <div className="tech-icons">
              <span>React</span>
              <span>Redux</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>JWT</span>
              <span>WebSocket</span>
              <span>Multer</span>
            </div>
          </div> */}
        </div>

        {/* Footer */}
        <div className="magazine-footer">
          <div className="footer-line"></div>
          <p className="footer-content">SECURE • SCALABLE • INNOVATIVE</p>
        </div>
      </div>
    </div>
  );
}

export default App;
