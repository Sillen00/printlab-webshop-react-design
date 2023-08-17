import Products from "../components/homepage-components/Products";
import "./Shop.css";

function Shop() {
  return (
    <>
      <div className="shop-div">
        <img src="./assets/logo.png" alt="Printlab logo" />
        <h2 className="shop-heading">Products</h2>
        <img src="./assets/logo.png" alt="Printlab logo" />
      </div>

      <Products />
      <Products />
    </>
  );
}

export default Shop;
