import React from "react";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaPrint } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h1>
                <IoDiamond className="diamond" />
                Coupons Code Plateform
              </h1>
            </div>
            <div className="col-md-3">
              <h2>CATEGORIES</h2>
              <ul>
                <li>Foods</li>
                <li>Clothings</li>
                <li>Wearable</li>
                <li>Travel</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>USEFULL LINKS</h2>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Offers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>CONTACT </h2>
              <address>
                <FaHome   className="gray"  />
                New York, NY 10012, US <br />
                <MdEmail  className="gray"  /> info@example.com
                <br />
                <IoCall   className="gray" /> + 01 234 567 88 <br />
                <FaPrint   className="gray" />+ 01 234 567 89 <br />
              </address>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Footer;
