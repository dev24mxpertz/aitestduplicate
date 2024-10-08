import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Dropdown, Menu, Space } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceItems = [
  {
    key: "1",
    label: (
      <Link
        to="/aicustomerservice"
        style={{ backgroundColor: "black", color: "white" }}
        className="dropdown-item"
      >
        FRONTEND SUPPORT
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to="/AIcustomworkforce"
        className="dropdown-item"
        style={{ backgroundColor: "black", color: "white" }}
      >
        BACKEND SUPPORT
      </Link>
    ),
  },
];

function Navigation() {
  // const NavAnimationRefs = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();
  const [selectedCountry, setSelectedCountry] = useState("Country");


    const SpellAnimationRefs = useRef([]);
  SpellAnimationRefs.current = [];

  const SpellAnimationRefsaddToRefs = (el) => {
    if (el && !SpellAnimationRefs.current.includes(el)) {
      SpellAnimationRefs.current.push(el);
    }
  };

  useEffect(() => {
    SpellAnimationRefs.current.forEach((slide) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: SpellAnimationRefs.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Apply the same animation to all child elements of each slide
      Array.from(slide.children).forEach((child) => {
        tl.fromTo(
          child,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2 }
        );
      });
    });
  }, []);

  // useEffect(() => {
  //   // NavAnimationRefs;

  //   var t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".HeroComponent_component3_p", // Trigger when this element is in view
  //       start: "top 80%", // Adjust based on when you want the animation to start
  //       toggleActions: "play none none reverse", // Controls the play and reverse actions
  //     },
  //   });

  //   t1.fromTo(".HeroComponent_component3_box_img_div" , {} ,{});


  //     // // Animate the image div
  //     // tl.fromTo(
  //     //   ".HeroComponent_component3_box_img_div",
  //     //   { width: 0, opacity: 0 }, // Start state: width 0 and fully transparent
  //     //   {
  //     //     width: "45%", // End state: full width (adjust the width as necessary)
  //     //     opacity: 1, // End state: fully visible
  //     //     duration: 1.5, // Adjust duration as needed
  //     //     ease: "ease.out", // Optional easing for a smooth animation
  //     //   }
  //     // );



  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCountryChange = ({ key }) => {
    setSelectedCountry(key);
  };

  const countryMenu = (
    <Menu onClick={handleCountryChange}>
      <Menu.Item key="India">
        <Link to="/" className="dropdown-item">
          India
        </Link>
      </Menu.Item>
      <Menu.Item key="UK">
        <Link to="/" className="dropdown-item">
          UK
        </Link>
      </Menu.Item>
    </Menu>
  );

  const serviceMenu = (
    <Menu>
      {serviceItems.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={`Header-Navigation  ${isSticky ? "sticky" : "fixed"}`}>
      <div className="navBarContainer">
        <Navbar expand="lg">
          <Container fluid className="p-0">
            <Navbar.Brand as={Link} to="/" ref={SpellAnimationRefsaddToRefs}>
              {/* <img
                // src={require(isSticky
                //   ? "../Assets/images/logo-ai.png"
                //   : "../Assets/images/logo-ai.png")}
                src={require(isSticky
                  ? "../Assets/images/newlogo.png"
                  : "../Assets/images/newlogo.png")}
                // newlogo.png
                alt="logo.png"
                className="logo img-fluid"
              /> */}
              <h1 className="LogoHd">Atlus</h1>
            </Navbar.Brand>

            <div className="d-block d-lg-none ms-auto me-2 signButtons">
              <Button as={Link} to="/signin" variant="light" className="mx-1">
                SIGN IN
              </Button>
              <Button as={Link} to="/signup" variant="outline-light">
                SIGN UP
              </Button>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="m-auto custom-nav-items p-3"
                ref={SpellAnimationRefsaddToRefs}
              >
                <NavLink
                  className={"fw-light"}
                  as={Link}
                  to="/"
                  activeclassname="active"
                >
                  Home
                </NavLink>
                <NavLink
                  className={"fw-light"}
                  as={Link}
                  to="/About"
                  activeclassname="active"
                >
                  About Us
                </NavLink>

                <Dropdown overlay={serviceMenu}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ fontWeight: "400" }}>
                      {/*  fw-light font-bold font-medium font-semibold Services */}
                      AI Workforce
                    </Space>
                  </a>
                </Dropdown>

                {/* <NavLink
                  className={"fw-light text-uppercase"}
                  as={Link}
                  to="/Why Choose Us"
                  activeclassname="active"
                >
                  Why Choose Us
                </NavLink> */}
                <NavLink
                  className={"fw-light"}
                  as={Link}
                  to="/Contact"
                  activeclassname="active"
                >
                  Contact Us
                </NavLink>

                {/* Ant Design Country Dropdown */}
                {/* <Dropdown overlay={countryMenu}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="fw-light text-uppercase fw-bolder">
                      {selectedCountry}
                    </Space>
                  </a>
                </Dropdown> */}
              </Nav>
            </Navbar.Collapse>
            <div
              className="d-none d-lg-block  signButtons"
              ref={SpellAnimationRefsaddToRefs}
            >
              <Button as={Link} to="/signin" variant="light" className="mx-3">
                SIGN IN
              </Button>
              <Button as={Link} to="/signup" variant="outline-light">
                SIGN UP
              </Button>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
