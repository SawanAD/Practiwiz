import React, { useEffect } from "react";
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

export const App = () => {
  useEffect(() => {
    // Header script
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("headeractive");
      } else {
        header.classList.remove("headeractive");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Responsive navbar script
    const navToggle = document.querySelector("#nav-toggler");
    const navExpand = document.querySelector("#navbarSupportedContent");
    const barIcon = document.querySelector("#bar-icon");
    const closeIcon = document.querySelector("#close-mark-icon");
    const handleNavToggle = () => {
      navExpand.classList.toggle("navbarmenucollapse");
      barIcon.classList.toggle("navbar-toggler-icon");
      closeIcon.classList.toggle("d-none");
    };
    navToggle.addEventListener("click", handleNavToggle);

    // Typing effect script
    const typingLine = document.getElementById("typing");
    const phrases = [
      "Learn Data-driven Business Insights",
      // "This is a typing effect.",
      // "You can change the phrases.",
      // "Customize it as you like!"
    ];

    let currentPhrase = Math.floor(Math.random() * (phrases.length - 1));
    let currentChar = 0;

    const type = () => {
      typingLine.textContent = phrases[currentPhrase].slice(0, ++currentChar);

      if (currentChar < phrases[currentPhrase].length) {
        setTimeout(type, 25);
      } else {
        setTimeout(erase, 2000);
      }
    };

    const erase = () => {
      typingLine.textContent = phrases[currentPhrase].slice(0, --currentChar);

      if (currentChar > 0) {
        setTimeout(erase, 25);
      } else {
        currentChar = 0;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 1000);
      }
    };

    type();

    // Job tab content script
    const tabsBtns = document.querySelectorAll("[data-tab-id]");
    const tabs = document.querySelectorAll("[data-tab]");
    let selectedTab = tabsBtns[0].dataset.tabId;

    const hideTabs = () => {
      tabs.forEach((tab) => {
        if (tab.dataset.tab !== selectedTab) {
          tab.classList.add("tabs__tab--hide");
        }
      });

      tabsBtns.forEach((btn) => {
        if (btn.dataset.tabId !== selectedTab) {
          btn.classList.add("tabs__tab-btn--not-selected");
        }
      });
    };

    const handleSelectTab = (e) => {
      selectedTab = e.target.dataset.tabId;

      tabs.forEach((tab) => {
        tab.classList.remove("tabs__tab--hide");
      });

      tabsBtns.forEach((btn) => {
        btn.classList.remove("tabs__tab-btn--not-selected");
      });

      hideTabs();
    };

    tabsBtns.forEach((btn) => {
      btn.addEventListener("click", handleSelectTab);
    });

    hideTabs();

    // Section 4 designed tab pill content script
    function openTab(tabName, event) {
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
    }

    // Section 5 script
    const tabs = document.querySelectorAll(".tabs li");
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tab_id = this.getAttribute("data-tab");

        tabs.forEach((tab) => {
          tab.classList.remove("cccccsa");
        });
        document.querySelectorAll(".tab-contentsa").forEach((content) => {
          content.classList.remove("cccccsa");
        });

        this.classList.add("cccccsa");
        document.getElementById(tab_id).classList.add("cccccsa");
      });
    });
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
