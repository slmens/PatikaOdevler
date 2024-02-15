import React from "react";
import "./Purchase.css";

function Purchase() {
  return (
    <section id="purchaseSection">
      <div id="purchaseIntro">
        <h2>PURCHASE FROM US</h2>
        <div id="purchaseOrangeBox"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis
          necessitatibus error quasi fugiat suscipit incidunt quam provident.
        </p>
      </div>
      <div id="purchaseCardContainer">
        <div className="purchaseCard">
          <img src="../../src/assets/purchase1.jpg" alt="purchaseImage" />
          <h3>Kettlebell / 5kg</h3>
          <h4>
            <span>89,99$</span> / 59,99$
          </h4>
          <div id="shoppingCartContainer">
            <i className="fa-solid fa-cart-shopping"></i>
            <h5>Add To Cart</h5>
            <div></div>
          </div>
        </div>
        <div className="purchaseCard">
          <img src="../../src/assets/purchase2.jpg" alt="purchaseImage" />
          <h3>Treadmill</h3>
          <h4>
            <span>899,99$</span> / 599,99$
          </h4>
          <div id="shoppingCartContainer">
            <i className="fa-solid fa-cart-shopping"></i>
            <h5>Add To Cart</h5>
            <div></div>
          </div>
        </div>
        <div className="purchaseCard">
          <img src="../../src/assets/purchase3.jpg" alt="purchaseImage" />
          <h3>Adjustable Dumbell</h3>
          <h4>
            <span>89,99$</span> / 59,99$
          </h4>
          <div id="shoppingCartContainer">
            <i className="fa-solid fa-cart-shopping"></i>
            <h5>Add To Cart</h5>
            <div></div>
          </div>
        </div>
        <div className="purchaseCard">
          <img src="../../src/assets/purchase4.jpg" alt="purchaseImage" />
          <h3>Kettlebell / 3kg</h3>
          <h4>
            <span>89,99$</span> / 59,99$
          </h4>
          <div id="shoppingCartContainer">
            <i className="fa-solid fa-cart-shopping"></i>
            <h5>Add To Cart</h5>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Purchase;
