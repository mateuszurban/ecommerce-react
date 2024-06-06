import { Breadcrumbs } from "../components/Breadcrumbs";
import { Button } from "../components/Button";
import { CustomerReviews } from "../components/CustomerReviews";
import { ProductDescriptionLong } from "../components/ProductDescriptionLong";
import { ProductDescriptionShort } from "../components/ProductDescriptionShort";
import { ProductInfo } from "../components/ProductInfo";
import { FAQ } from "../components/FAQ";
import { Badges } from "../components/Badges";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants/products";

export function ProductDetails() {
  const params = useParams();
  const IdToDisplay = params.productId;

  const productToDisplay = PRODUCTS.find(
    (product) => product.id == IdToDisplay
  );

  function addProductToCart(id) {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    // cartItems.push({ id: id, amount: 1 });
    cartItems.push(Number(id));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <div className="container">
      <Breadcrumbs productCategory={productToDisplay.category} />
      <ProductInfo product={productToDisplay} />
      <Button
        buttonText={"Add to cart"}
        colourTheme={"main"}
        onClick={() => addProductToCart(IdToDisplay)}
      />
      <Badges />
      <ProductDescriptionShort
        descriptionShort={productToDisplay.detailsShort}
      />
      <ProductDescriptionLong descriptionLong={productToDisplay.details} />
      <CustomerReviews />
      <FAQ />
    </div>
  );
}
