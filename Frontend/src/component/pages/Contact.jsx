import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <h2 className="text-center">Contact Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="box box-1">
              <p><TiLocation /></p>
              <h6>ADDRESS</h6>
            <address>
                Nashik, <br />
                422009
            </address>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box box-1">
            <p><IoCall /></p>
              <h6>CONTACT US</h6>
              <p>+90211 90242</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box box-1">
           <p><MdEmail /></p> 
              <h6>EMAIL</h6>
              <p>couponscode@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-6 form-left">
                <label>FULL NAME</label>
                <input type="text" name="" id="" className="form-control" />
                <label>EMAIL</label>
                <input type="email" name="" id="" className="form-control" />
                <label>MESSAGE</label>
                <textarea name="" id="" className="form-control" rows={5}></textarea>
                <Button variant="dark">Send Message</Button>
            </div>
            <div className="col-md-6 form-right">
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.4334471820075!2d73.68714267610983!3d20.03227948137924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddedd75b257ee7%3A0xd607636433df8d5f!2sJawahar%20Education%20Society&#39;s%2C%20INSTITUTE%20OF%20TECHNOLOGY%2C%20MANAGEMENT%20AND%20RESEARCH%2C%20NASHIK!5e0!3m2!1sen!2sin!4v1707915817522!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
