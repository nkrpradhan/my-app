import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/amazonlogo.png";
export default function Header() {
  const doSomething = (e) => {
    // let selectedIndex = e.target.options.selectedIndex;
    // const charlen = e.target.options[selectedIndex].outerText.length;
    // console.log(charlen);
    // const test = document.querySelector(".custom-select");
    // console.log("document value--", test);
    // test.style.width = charlen * 8 + "px";
  };
  return (
    <>
      <main>
        <header>
          <Navbar className="custom-navbar">
            <Container className="container">
              <Nav>
                <Nav.Link href="" className="custom-nav">
                  <img
                    src={logo}
                    alt=""
                    style={{ padding: 0, width: "80%", height: "120%" }}
                  />
                </Nav.Link>
                <Nav.Link href="" className="custom-nav">
                  <span style={{ fontFamily: "Arial", fontSize: "12px" }}>
                    Deliver to John
                  </span>
                </Nav.Link>
                <form action="">
                  <div className="searchdiv">
                    <select
                      name=""
                      id=""
                      className="custom-select"
                      onChange={doSomething}
                    >
                      <option value="1">All</option>
                      <option value="2">Alexa Skills</option>
                      <option value="3">Alexa Skills fdfdfffffffffff</option>
                      <option value="4">
                        Alexa Skills accccceeeeeeeiioioioioio
                      </option>
                    </select>
                    <input type="text" name="" id="" className="searchbar" />
                    <button>Search</button>
                  </div>
                </form>
              </Nav>
            </Container>
          </Navbar>
        </header>
      </main>
    </>
  );
}
