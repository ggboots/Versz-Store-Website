import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Title Container*/}
      <div className="title-container">
        <div className="title">
          <h1 className="text-3xl font-bold">Versz Store</h1>
        </div>
      </div>
      {/* Main Container*/}
      <div className="main-container">
        <div>Content</div>
      </div>

      {/* Container 4  */}
      <div className="card">
        <p>
          Developed by <code>Grahmn</code> 🛠️
        </p>
      </div>
    </>
  );
}

export default App;
