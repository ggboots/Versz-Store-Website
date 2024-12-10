import { useState } from "react";
import shoppingIcon from "/ShoppingIcon.png"
import VerszLogo from "/VerszLogo.png"

import socketAdapterHolder from "/Front-RenderView.jpg"
import "./App.css";

function App() {
  return (
    <>
      {/* Title Container*/}
      <div className="title-container">
            <img className="store-logo" src={VerszLogo}/>
          <div className="title">
            <h1 className="title-text text-3xl">VERSZ Digital</h1>
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
              <img className="content-image" src={socketAdapterHolder}/>
            </div>
            <div><button>3D Model View</button></div>
          </div>
          <div className="description-container">
            <div className="text-3xl mb-6 font-medium">Socket Adapter Holder (DIGITAL FILE ONLY)</div>
            <div className="mr-6 w-5/6">
              <p className="flex text-left">Holder for Socket adapter hex bits and socket adapter, with a magnetic base to hold position inside toolbox or metal surface</p>
              <p className="flex text-left">This purchase only includes digital files for you to 3D print, this is a non-refundable purchase</p>
              </div>
            <p className="my-2 italic"> - 1x SocketAdapterMagnetBase.stl</p>
            <p className="underline mt-2 mb-6">Refund Policy </p>
            <div className="mt-8 w-3/4 flex justify-center"><button>Add to Cart</button></div>
            {/* <div className="stripe-button-container"><button className="bg-purple-600 text-neutral-100 font-bold "><h2 >Stripe </h2></button></div> */}
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
