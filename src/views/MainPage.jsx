import { Bestsellers } from "../components/Bestsellers";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";
import { AboutCopy } from "../components/AboutCopy";
import { MainPageProductDisplay } from "../components/MainPageProductDisplay";
import { PRODUCTS } from "../constants/products";
import { Newsletter } from "../components/Newsletter";

import categoryOffice from "../assets/category_office.jpeg";
import categoryAccessories from "../assets/category_accessories.jpeg";
import categoryArt from "../assets/category_art.jpeg";
import { useEffect } from "react";

export function MainPage() {
  // To prevent errors created by an empty localstorage:
  function populateLocalStorage() {
    let localStorageCart = JSON.parse(localStorage.getItem("cart"));

    if (localStorageCart === null) {
      localStorageCart = [];
      localStorage.setItem("cart", JSON.stringify(localStorageCart));
    }
  }

  useEffect(() => {
    populateLocalStorage();
  }, []);

  return (
    <>
      <Hero />
      <div className="bestsellersContainer">
        <Link to="/category/furniture">
          <Bestsellers
            title={"office furniture"}
            description={"explore modern workspace"}
            categoryImageSrc={categoryOffice}
          />
        </Link>
        <Link to="/category/accessories">
          <Bestsellers
            title={"accessories"}
            description={"Curate Your Unique Space"}
            categoryImageSrc={categoryAccessories}
          />
        </Link>
        <Link to="/category/art">
          <Bestsellers
            title={"art"}
            description={"the room is yours"}
            categoryImageSrc={categoryArt}
          />
        </Link>
      </div>
      <hr />
      <h2>Available soon</h2>
      <MainPageProductDisplay product={PRODUCTS[0]} buttonText={"Preorder"} />
      {/* <hr /> */}
      <h2>Special offers</h2>
      <div className="specialOffers">
        <MainPageProductDisplay
          product={PRODUCTS[1]}
          buttonText={"Order now"}
        />
        <MainPageProductDisplay
          product={PRODUCTS[14]}
          buttonText={"Order now"}
        />
        <MainPageProductDisplay
          product={PRODUCTS[26]}
          buttonText={"Order now"}
        />
      </div>

      <Newsletter />
      <AboutCopy />
    </>
  );
}
