import "./WhyShopWithUs.css";

function WhyShopWithUs() {
  return (
    <section className="WSWU-section">
      <h2 className="WSWU-h2">Why Shop With Us</h2>
      <div className="WSWU-div">
        <div className="WSWU-card">
          <img
            className="WSWU-images"
            src="./assets/benefit1.png"
            alt="black and white image on a 3d printer machine"
          />
          <h6>Unparalleled Customization</h6>
          <p>Create a one-of-a-kind item!</p>
        </div>
        <div className="WSWU-card">
          <img
            className="WSWU-images"
            src="./assets/benefit2.png"
            alt="close up image of a 3d printer making a crown like product."
          />
          <h6>Cutting-Edge Technology</h6>
          <p>
            Staying at the forefront of the industry ensures <br /> that customers receive top-notch
            creations.
          </p>
        </div>
        <div className="WSWU-card">
          <img
            className="WSWU-images"
            src="./assets/benefit3.png"
            alt="close up image on a 3d printed sqware that standing on one of it edges."
          />
          <h6>Fast and Flexible Manufacturing</h6>
          <p>
            Our efficient manufacturing process ensures <br /> customers get their items promptly
            and reliably.
          </p>
        </div>
        <div className="WSWU-card">
          <img
            className="WSWU-images"
            src="./assets/benefit4.png"
            alt="image showing printlab have ecofriendly product with a mini fan and a leaf underneath it."
          />
          <h6>Sustainability & Eco-Friendly</h6>
          <p>
            Contribute to a greener planet and support <br /> environmentally responsible practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyShopWithUs;
