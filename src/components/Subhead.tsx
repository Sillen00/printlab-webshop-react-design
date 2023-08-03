import OrangeButton from "./OrangeButton";
import "./Subhead.css";

function Subhead() {
  return (
    <div className="subhead-div">
      <div className="subhead-image-div">
        <img
          className="subhead-image"
          src="./assets/subhead-image.jpg"
          alt="Subhead image of a printer making a design ball where you can put a tea light in."
        />
      </div>
      <div className="subhead-text-div">
        <h2>Unleash Your Imagination With 3D Printing! </h2>
        <p>Transform your ideas into reality, Welcome to PrintLab!</p>

        <OrangeButton>Shop Now</OrangeButton>
      </div>
    </div>
  );
}

export default Subhead;
