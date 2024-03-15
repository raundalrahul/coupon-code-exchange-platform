import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-primary">
          Fuel Your Savings Engine & Drive Your Shopping Experience to Mastery
        </h1>
        <div className="homepage-img">
          <img src="./homepage.jpg" className="rounded mx-auto d-block" />
        </div>
      </div>
   
    </>
  );
}

export default Home;
