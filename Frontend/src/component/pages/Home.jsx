import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <React.Fragment>
      <h1 className=" text-center">Coupons Code</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="card" >
              <img src="https://picsum.photos/200/301" class="card-img-top" height="200px"  alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Redem Coupons
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" >
              <img src="https://picsum.photos/201/300" class="card-img-top" height="200px" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                Redem Coupons
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" >
              <img src="https://picsum.photos/200/301" class="card-img-top"height="200px"  alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                Redem Coupons
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default Home;
