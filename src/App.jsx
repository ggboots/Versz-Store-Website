import { useState } from "react";
import shoppingIcon from "../public/ShoppingIcon.png"
import VerszLogo from "../public/VerszLogo.png"

import TorxBitImage from "../public/Front-RenderView.jpg"
import "./App.css";

function App() {
  return (
    <>
      {/* Title Container*/}
      <div className="title-container">
            <img className="store-logo" src={VerszLogo}/>
          <div className="title">
            <h1 className="title-text text-3xl">Versz Store</h1>
          </div>
          <div className="title-icon-container">
            <img className="title-icon" src={shoppingIcon}/>
          </div>
      </div>
      {/* Main Container*/}
      <div className="main-container">
        <div className="main-container-divider">
          <div className="content-container">
            <div className="content-image-container">
              <img className="content-image" src={TorxBitImage}/>
            </div>
            <div><button>3D Model View</button></div>
          </div>
          <div className="description-container">
            <div className="text-3xl">Product Name</div>
            <p>Product Description</p>
            <div><button>Purchase</button></div>
          </div>

        </div>
      </div>

      {/* FooterContainer  */}
      <div className="card">
        <p>
          Developed by <code>Grahmn</code> 🛠️
        </p>
      </div>
    </>
  );
}

export default App;
