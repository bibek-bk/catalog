import "./about.scss";
import Image from "../../assets/Image.png";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";

function About() {
  return (
    <div className="about">
      <div className="content">
        <h2>Who we are</h2>
        <p>
          We are a collaboration of Non Govt. and professionals working to
          ensure that government spending is done fairly, openly, efficiently,
          and creates the best value for money and best outcomes for Europe. We
          are working at the national and EU levels to advance the principles of
          openness in spending of funds, procurement, and company ownership
          within the EU.
        </p>
        <p>See more</p>
      </div>

      <div className="image">
        <div>
          <div className="img">
          <img src={Image2} alt="image2" />

          </div>
          <h3>Adriana Homolova</h3>
          <div className="img">
          <img src={Image1} alt="image1" />

          </div>
          <h3>Karolis Granickas</h3>
        </div>
        <div>
          <div className="img">
          <img src={Image3} alt="image3" />

          </div>
          <h3>Sandor Lederer</h3>
          <div className="img">
          <img src={Image} alt="image" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
