import OrangeButton from "../OrangeButton"
import "./Products.css"

function Products() {
  return (
    <section>
        <div>
            <h2>Our Top Buyed Products:</h2>
            <p>Create a one-of-a-kind product!</p>
            <OrangeButton>Create Your Own</OrangeButton>
        </div>

        <div className="product-card">
            <img src="./assets/product1.png" alt="3D printed design cube with holes in it." />
            <h6>Design Cube</h6>
            <p>Add To Cart</p>
        </div>
        <div className="product-card">
            <img src="./assets/product2.png" alt="3D printed tape mesure holder." />
            <h6>Tape Mesure Holder</h6>
            <p>Add To Cart</p>
        </div>
        <div className="product-card">
            <img src="./assets/product3.png" alt="3D printed self-watering planter with a plant in it." />
            <h6>Self-Watering Planter</h6>
            <p>Add To Cart</p>
        </div>
        <div className="product-card">
            <img src="./assets/product4.png" alt="3D printed Whistle Blower that makes over 118 decibel." />
            <h6>Whistle Blower</h6>
            <p>Add To Cart</p>
        </div>
        <div className="product-card">
            <img src="./assets/product5.png" alt="3D printed Pikachu figure that is holding a fishingrow, fishing in a tea cup." />
            <h6>Pikachu Tea Holder</h6>
            <p>Add To Cart</p>
        </div>
    </section>
  )
}

export default Products