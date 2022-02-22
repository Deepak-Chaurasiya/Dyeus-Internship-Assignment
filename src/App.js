import logo from './logo.svg';
import './index.css';
import image from './image.png';
import cart from './Vector.png';
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiHamburgerMenu } from "react-icons/gi";

import { TiTick } from "react-icons/ti";

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <nav>
          <div className="hamburgermenu">
            <a href='#'>
              <GiHamburgerMenu color="white" fontSize="1.2em" />
            </a>
          </div>
          <div className="left-side-menu">
            <ul>
              <a href={"#"}><li>Home </li></a>
              <a href={"#"}><li>Shop </li></a>
              <a href={"#"}><li>Pofile </li></a>
              <a href={"#"}><li>SpecialHub </li></a>
            </ul>



          </div>


          <div className={"right-side-menu"}>
            <a href={"#"} ><FontAwesomeIcon FaRegular icon={faCartShopping} size="2x" style={{ color: "white" }} /></a>



          </div>

        </nav>




      </header>

      <hr />


      <section className="display-section">
        <div className="left-side-part"><img src={image}></img></div>

        <div className="right-side-part">

          <h1>Everyday rinse and reload</h1>
          <p>Achieve your dream skin goal with this complete package of skincare products that will rejuvenate your day.</p>

          <div className="ratingpart">

            <div className="ratingBar">

              <FontAwesomeIcon FaRegular icon={faStar} size="lg" style={{ color: "white" }} />
              <FontAwesomeIcon FaRegular icon={faStar} size="lg" style={{ color: "white" }} />
              <FontAwesomeIcon FaRegular icon={faStar} size="lg" style={{ color: "white" }} />
              <FontAwesomeIcon FaRegular icon={faStar} size="lg" style={{ color: "white" }} />
              <FontAwesomeIcon FaRegular icon={faStar} size="lg" style={{ color: "white" }} />

            </div>
            <div><p> 4.5 </p></div>
            <h4>Click to read reviews</h4>

          </div>
          <div className="pricingPart">
            <h1>₹899</h1>
            <h1>₹1299</h1>
          </div>
          <div className="boxholder ">

            <div className="pricingbox pricingboxpart1" >

              <div className="mostpopular"><FontAwesomeIcon icon={faStar} size="sm" style={{ color: "white" }} /> MOST POPULAR <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "white" }} /></div>

              <h2> 1 Months Pack (4 tubes) </h2>
              <h3> Savings: ₹200 </h3>
              <div></div>
              <div className="paranbold">

                <p> 38% Saved    </p>
                <b> Best Results </b>

              </div>
              <div className="pricingPart2">
                <h1>₹595</h1>
                <h1>₹795</h1>
              </div>


            </div>
            {/* <div className="selecone"><TiTick color="white" fontSize="1.2em" /></div> */}

            <div className="pricingbox pricingboxpart1 pricingboxpart2">



              <h2> 3 Months Pack (12 tubes)</h2>
              <h3> Savings: ₹100 </h3>
              <div></div>
              <div className="paranbold">

                <p> 12% Saved   </p>

              </div>
              <div className="pricingPart2">
                <h1>₹595</h1>
                <h1>₹795</h1>
              </div>






            </div>

          </div>


          <button> <FontAwesomeIcon FaRegular icon={faCartShopping} size="2x" style={{ color: "white" }} /> <p> ADD TO CART </p></button>


        </div>




      </section>
    </div>
  );
}

export default App;
