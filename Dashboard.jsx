import React from "react";
import "./Dashboard.css";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.webp";
import pic3 from "./pic3.webp";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";
import rating from "./stars.png";

export default function dashboard({price1, price2, price3, price4, price5}) {
  return (
    <div>
      <div className="container">
        <div className="section1">
          <img src={pic1} id="pic1" alt="" />
          <div className="Name">
            <div className="name">Nord Stage 3 88 Keys</div>
            <div className="info1">
              <div className="box1">Brand New</div>
              <div className="box2">Free Shipping</div>
              <div className="box3">15% Off</div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2a">
            <div className="company">E.M.L.A Music</div>
            <div className="location">La Haver,France</div>
            <div className="ratings">
              <img src={rating} alt="" />
            </div>
          </div>
          <div className="section2b">
            <strike>$6500.00</strike>
            <div className="price">${price1}.00 AUD</div>
            <div className="shipping">+195 Shipping</div>
          </div>
          <div className="section2c">
            <button>Add To Cart</button>
            <button>Make Offer</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section1">
          <img src={pic2} id="pic1" alt="" />
          <div className="Name">
            <div className="name">Line 6 Helix Piano</div>
            <div className="info1">
              <div className="box1">Brand New</div>
              <div className="box2">Free Shipping</div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2a">
            <div className="company">Pro Music Tool</div>
            <div className="location">Munchen, Germany</div>
            <div className="ratings">
              <img src={rating} alt="" />
            </div>
          </div>
          <div className="section2b">
            <strike>$6500.00</strike>
            <div className="price">${price2}.00 AUD</div>
            <div className="shipping">+$244.36 Shipping</div>
          </div>
          <div className="section2c">
            <button>Add To Cart</button>
            <button>Make Offer</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section1">
          <img src={pic3} id="pic1" alt="" />
          <div className="Name">
            <div className="name">Nord Lead A1</div>
            <div className="info1">
              <div className="box1">Brand New</div>
              <div className="box2">Free Shipping</div>
              <div className="box3">20% Off</div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2a">
            <div className="company">Gear Garrage</div>
            <div className="location">Dulvich Hill, Australia</div>
            <div className="ratings">
              <img src={rating} alt="" />
            </div>
          </div>
          <div className="section2b">
            <strike>$6500.00</strike>
            <div className="price">${price3}.00 AUD</div>
            <div className="shipping">+35 Shipping</div>
          </div>
          <div className="section2c">
            <button>Add To Cart</button>
            <button>Make Offer</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section1">
          <img src={pic4} id="pic1" alt="" />
          <div className="Name">
            <div className="name">Moog Subsequent 37</div>
            <div className="info1">
              <div className="box1">Brand New</div>
              <div className="box2">Free Shipping</div>
              <div className="box3">10% Off</div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2a">
            <div className="company">TURNLAB</div>
            <div className="location">Antwerpan, Belgium</div>
            <div className="ratings">
              <img src={rating} alt="" />
            </div>
          </div>
          <div className="section2b">
            <strike>$6500.00</strike>
            <div className="price">${price4}.00 AUD</div>
            <div className="shipping">+205 Shipping</div>
          </div>
          <div className="section2c">
            <button>Add To Cart</button>
            <button>Make Offer</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section1">
          <img src={pic5} id="pic1" alt="" />
          <div className="Name">
            <div className="name">Moog Minitaur 2010s Black</div>
            <div className="info1">
              <div className="box1">Brand New</div>
              <div className="box2">Free Shipping</div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2a">
            <div className="company"> Andrew's Gear Outlet</div>
            <div className="location">United States</div>
            <div className="ratings">
              <img src={rating} alt="" />
            </div>
          </div>
          <div className="section2b">
            <strike>$6500.00</strike>
            <div className="price">${price5}.00 AUD</div>
            <div className="shipping">+42.68 Shipping</div>
          </div>
          <div className="section2c">
            <button>Add To Cart</button>
            <button>Make Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
