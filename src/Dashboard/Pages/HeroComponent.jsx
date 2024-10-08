import React, { useEffect, useRef } from "react";
import newlogo from "../../Assets/newlogo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroComponent = () => {
  const scrolllogoref = useRef(null);
  const logoscrolltocenter = useRef(null);
  const componentOneRef = useRef(null);
  const componentTwoRef = useRef(null);

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
            trigger: slide,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        // Apply the same animation to all child elements of each slide
        Array.from(slide.children).forEach((child) => {
          tl.fromTo(
            child,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4 }
          );
        });
      });
    }, []);

  useGSAP(() => {
    var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.from(".textItem", {
      y: 50,
      duration: 0.2,
      opacity: 0,
      stagger: 0.3,
    });
    tl.from(".textItem2", {
      y: 50,
      duration: 0.2,
      opacity: 0,
      stagger: 0.3,
    });
    tl.to(".textItem", {
      y: -50,
      duration: 0.1,
      opacity: 0,
      stagger: 0.3,
    });
    tl.to(".textItem2", {
      y: -50,
      duration: 0.1,
      opacity: 0,
      stagger: 0.3,
    });
  });

  useEffect(() => {
    // First animation
    var firstAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: scrolllogoref.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    firstAnimation
      .fromTo(
        ".HeroComponent_img",
        { width: "0%", opacity: 0, left: "0%" },
        {
          width: "60%",
          opacity: 1,
          duration: 2,
          left: "70%",
          ease: "ease.out",
        }
      )
      .fromTo(
        ".divanimation",
        { width: 0, opacity: 0 },
        {
          width: "100%",
          opacity: 1,
          duration: 1,
          ease: "ease.out",
        }
      )
      .fromTo(
        ".HeroComponent_button",
        { width: 100, opacity: 0 },
        {
          width: "30%",
          opacity: 1,
          duration: 1,
          ease: "ease.out",
        }
      )
      .eventCallback("onComplete", () => {
        // Animation for logoscrolltocenter element on scroll complete
        gsap.fromTo(
          logoscrolltocenter.current,
          {
            width: "60%",
            opacity: 1,
          },
          {
            scrollTrigger: {
              trigger: logoscrolltocenter.current,
              start: () => window.innerHeight === 877,
              end: () => window.innerHeight === 1000,
              scrub: true,
              toggleActions: "play none none reverse",
              // markers: true,
            },
            width: "40%",
            opacity: 1,
            left: "50%",
            top: "90%",
            duration: 2,
            ease: "ease.out",
          }
        );

        // Animation for componentTwoRef after logoscrolltocenter animation
        gsap.fromTo(
          componentTwoRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: componentTwoRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          }
        );
      });
  }, []);

  return (
    <div className="HeroComponent_main">
      <div className="HeroComponent_width" ref={componentOneRef}>
        <div className="HeroComponent_component1">
          <div className="divanimation">
            <div className="margintopclass">
              <span className="HeroComponent_h1 textItem">HIRE</span>
              <span className="HeroComponent_h1 textItem">CUSTOM</span>
              <span className="orange_color HeroComponent_h1 textItem">AI</span>
              <span className="orange_color HeroComponent_h1 textItem">
                WORKFORCE
              </span>
            </div>

            <div className="margintopclass2">
              <span className="HeroComponent_h1 textItem2">FOR</span>
              <span className="HeroComponent_h1 textItem2">YOUR</span>
              <span className="HeroComponent_h1 textItem2">BUSINESS.</span>
            </div>
          </div>

          <button className="HeroComponent_button">Ready to connect?</button>

          <img
            src={newlogo}
            alt="AILogo"
            className="HeroComponent_img"
            ref={(el) => {
              scrolllogoref.current = el;
              logoscrolltocenter.current = el;
            }}
          />
        </div>
      </div>
      <div className="HeroComponent_width2" ref={componentTwoRef}>
        <div className="padding_20">
          <div
            className="HeroComponent_component2"
            ref={SpellAnimationRefsaddToRefs}
          >
            <div className="HeroComponent_component2_paradiv">
              <p>
                Altus provides advanced AI-based solutions tailored to enhance
                both front-end and back-end operations. Our technology empowers
                businesses by reducing workload and boosting productivity.
              </p>
            </div>
            <h3 className="HeroComponent_component2_h3 orange_color">
              OUR SERVICES
            </h3>
            <h2 className="HeroComponent_component2_h2">
              EMPOWERING YOUR BUSINESS WITH AI-DRIVEN EXCELLENCE
            </h2>
            <div className="HeroComponent_component2_box_main">
              <div className="HeroComponent_component2_box1">
                <h3 className="orange_color HeroComponent_component2_box_h3">
                  AI FRONTEND SUPPORT
                </h3>
                <p className="HeroComponent_component2_box_p">
                  Automate 80% of support tasks with AI, enhancing customer
                  service across all channels.
                </p>
              </div>
              <div className="HeroComponent_component2_box2">
                <h3 className="orange_color HeroComponent_component2_box_h3">
                  AI BACK-END SUPPORT
                </h3>
                <p className="HeroComponent_component2_box_p">
                  Tailored AI solutions to boost your business efficiency and
                  productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
