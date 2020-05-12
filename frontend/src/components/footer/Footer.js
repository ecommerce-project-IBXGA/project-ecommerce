import React, { Component } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLine,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3>Payment</h3>
            <img
              className="payment"
              src={require("../img/bca.jpeg")}
              alt="bca"
            />
            <img
              className="payment"
              src={require("../img/mandiri.png")}
              alt="Mandiri"
            />
            <img
              className="payment"
              src={require("../img/cimbniaga.jpeg")}
              alt="Cimb Niaga"
            />
            <img className="payment" src={require("../img/bpr.jpg")} alt="BPR" />
            <img
              className="payment"
              src={require("../img/indomaret.png")}
              alt="Indomaret"
            />
            <img
              className="payment"
              src={require("../img/alfamart.jpg")}
              alt="Alfamart"
            />
            <img className="payment" src={require("../img/bri.png")} alt="BRI" />
            <img className="payment" src={require("../img/ovo.jpg")} alt="OVO" />
          </div>
          <div className="col-4">
            <h3>delivery</h3>
            <img
              className="delivery"
              src={require("../img/jne.jpeg")}
              alt="Jne"
            />
            <img
              className="delivery"
              src={require("../img/posindonesia.png")}
              alt="Pos Indonesia"
            />
            <img
              className="delivery"
              src={require("../img/jnt.jpg")}
              alt="JNT"
            />
            <img
              className="delivery"
              src={require("../img/tiki.jpg")}
              alt="TIKI"
            />
          </div>
          <div className="col-4">
            <h3>Follow Us</h3>
            <div style={{ color: "blue" }}>
              <FaFacebook size={50} color="blue" />
              <FaInstagram size={50} color="red" />
              <FaTwitter size={50} color="blue" />
              <FaLine size={50} color="green" />
              <FaYoutube size={50} color="red" />
            </div>
          </div>
        </div>
        <h5 className="text-center">
          &copy; Copyright by Ecommerce-Project 2020{" "}
        </h5>
      </div>
    );
  }
}