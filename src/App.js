import React, { useEffect } from "react";
import "./App.css";
import Header from "./lib/Header";
import Footer from "./lib/Footer";
import First from "./component/home-page/First";
import Second from "./component/home-page/Second";
import RegistrationForm from "./component/register/registerform";
import About from "./component/AboutUs/about";
import Login from "./component/LoginForm/login";
import FindJob from "./component/find-job/FindJob";
import { ContactUs, GoogleMap, Section7 } from "./component/Contactus/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    /* global $ */
    const loadScripts = async () => {
      // Load jQuery
      const jQueryScript = document.createElement("script");
      jQueryScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js";
      document.body.appendChild(jQueryScript);

      // Load Owl Carousel
      const owlCarouselScript = document.createElement("script");
      owlCarouselScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
      owlCarouselScript.integrity =
        "sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==";
      owlCarouselScript.crossOrigin = "anonymous";
      owlCarouselScript.referrerPolicy = "no-referrer";
      document.body.appendChild(owlCarouselScript);

      // Wait for jQuery and Owl Carousel to load
      await new Promise((resolve) => {
        owlCarouselScript.onload = resolve;
      });

      // Initialize Owl Carousel sliders
      $(".udguafr_slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });

      $(".owldihsard").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });

      // Header script
      var header = document.querySelector("header");
      window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
          header.classList.add("headeractive");
        } else {
          header.classList.remove("headeractive");
        }
      });

      // Responsive navbar script
      const navToggle = document.querySelector("#nav-toggler");
      const navExpand = document.querySelector("#navbarSupportedContent");
      const barIcon = document.querySelector("#bar-icon");
      const closeIcon = document.querySelector("#close-mark-icon");

      navToggle.addEventListener("click", function () {
        if (navExpand.classList.contains("navbarmenucollapse")) {
          navExpand.classList.remove("navbarmenucollapse");
        } else {
          navExpand.classList.add("navbarmenucollapse");
        }

        if (barIcon.classList.contains("navbar-toggler-icon")) {
          barIcon.classList.remove("navbar-toggler-icon");
          closeIcon.classList.remove("d-none");
        } else {
          barIcon.classList.add("navbar-toggler-icon");
          closeIcon.classList.add("d-none");
        }
      });

      // Typing effect script
      const phrases = [
        "Learn Data-driven Business Insights",
        // "This is a typing effect.",
        // "You can change the phrases.",
        // "Customize it as you like!"
      ];

      let currentPhrase = Math.floor(Math.random() * (phrases.length - 1));
      let currentChar = 0;
      let typingLine = document.getElementById("typing");

      function type() {
        typingLine.textContent = phrases[currentPhrase].slice(0, ++currentChar);

        if (currentChar < phrases[currentPhrase].length) {
          setTimeout(function () {
            requestAnimationFrame(type);
          }, 25);
        } else {
          setTimeout(erase, 2000);
        }
      }

      function erase() {
        typingLine.textContent = phrases[currentPhrase].slice(0, --currentChar);

        if (currentChar > 0) {
          setTimeout(function () {
            requestAnimationFrame(erase);
          }, 25);
        } else {
          currentChar = 0;
          currentPhrase = (currentPhrase + 1) % phrases.length;
          setTimeout(type, 1000);
        }
      }

      type();

      // Job tab content script
      const tabsBtns = Array.from(document.querySelectorAll("[data-tab-id]"));
      const tabs = Array.from(document.querySelectorAll("[data-tab]"));

      let selectedTab = tabsBtns[0].dataset.tabId;

      const hideTabs = () => {
        tabs
          .filter((tab) => tab.dataset.tab !== selectedTab)
          .forEach((tab) => {
            tab.classList.add("tabs__tab--hide");
          });

        tabsBtns
          .filter((tab) => tab.dataset.tabId !== selectedTab)
          .forEach((tab) => {
            tab.classList.add("tabs__tab-btn--not-selected");
          });
      };
      hideTabs();

      const handleSelectTab = (e) => {
        selectedTab = e.target.dataset.tabId;

        tabs.forEach((tab) => {
          tab.classList.remove("tabs__tab--hide");
        });

        tabsBtns.forEach((tab) => {
          tab.classList.remove("tabs__tab-btn--not-selected");
        });

        hideTabs();
      };

      tabsBtns.forEach((btn) => {
        btn.addEventListener("click", handleSelectTab);
      });

      // Section 4 designed tab pill content script
      /* function openTab(tabName, event) {
        var i, tabContent, tabLinks;
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
          tabContent[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab");
        for (i = 0; i < tabLinks.length; i++) {
          tabLinks[i].classList.remove("active");
        }
        document.getElementById(tabName + "Content").style.display = "block";
        event.currentTarget.classList.add("active");
      } */

      // Section 5 script
      $(document).ready(function () {
        $(".tabs li").click(function () {
          var tab_id = $(this).attr("data-tab");

          $(".tabs li").removeClass("cccccsa");
          $(".tab-contentsa").removeClass("cccccsa");

          $(this).addClass("cccccsa");
          $("#" + tab_id).addClass("cccccsa");
        });
      });
    };

    // Call the function
    loadScripts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <First />
                <Second />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Header />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <>
                <Header />
                <RegistrationForm />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <>
                <Header />
                <ContactUs />
                <GoogleMap />
                <Section7 /> <Footer />
              </>
            }
          />
          <Route
            exact
            path="/findjob"
            element={
              <>
                {" "}
                <Header />
                <FindJob />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
