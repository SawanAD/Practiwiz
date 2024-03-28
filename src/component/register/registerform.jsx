import React from "react";
import "./registerform.css";

function RegistrationForm() {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"
        integrity="sha512-OTcub78R3msOCtY3Tc6FzeDJ8N9qvQn1Ph49ou13xgA9VsH9+LRxoFU6EqLhW4+PKRfU+/HReXmSZXHEkpYoOA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div
        className="regis_background"
        style={{
          background: "url(images/fsdssdd.webp) no-repeat",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="iuhieiuihaw_left sticky-top">
                <h3>
                  Grow Your Professional Career with{" "}
                  <span className="span222">Top-Rated</span> Mentors
                </h3>

                <p>
                  Join us to upgrade your professional career with our mentor’s
                  guidance. We provide a personalised training approach to
                  improve your project management skills. Master the skill to
                  work under pressure on various projects within tight
                  deadlines. At Practiwiz we have courses for working
                  professionals, MBA students, and aspiring IT business
                  analysts. Hurry up and reserve your mentorship class today.
                </p>

                <h5 className="mt-4">Benefits of Our Mentorship Course:</h5>

                <ul className="ps-0 mt-3">
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>

                      <p className="mb-0">Self-paced training</p>
                    </div>
                  </li>

                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>

                      <p className="mb-0">Flexible timing and scheduling</p>
                    </div>
                  </li>

                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>

                      <p className="mb-0">
                        Career guidance from experienced mentors
                      </p>
                    </div>
                  </li>

                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>

                      <p className="mb-0">Expert advice and guidance</p>
                    </div>
                  </li>

                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>

                      <p className="mb-0">
                        <a href="/register">Sign Up Now!</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="iuhieiuihaw_right bg-white p-5">
                <div className="uherrr_text text-center">
                  <h4>Sign up</h4>

                  <p className="mb-0">
                    Already Have An Account? <a href="/register">Log In</a>
                  </p>
                </div>

                <div className="ihduwfr_form_wrapper mt-3">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        First Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail2"
                        placeholder="First Name"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Last Name
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Phone Number
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Phone Number"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        aria-describedby="emailHelp"
                      />

                      <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        I Want To Register As
                      </label>{" "}
                      <br />
                      <input
                        type="radio"
                        id="rdo1"
                        defaultChecked
                        className="radio-input"
                        name="radio-group"
                      />
                      <label htmlFor="rdo1" className="radio-label">
                        {" "}
                        <span className="radio-border"></span> Mentor{" "}
                      </label>
                      <input
                        type="radio"
                        id="rdo2"
                        className="radio-input"
                        name="radio-group"
                      />
                      <label htmlFor="rdo2" className="radio-label">
                        <span className="radio-border"></span> Mentee{" "}
                      </label>
                      <input
                        type="radio"
                        id="rdo3"
                        className="radio-input"
                        name="radio-group"
                      />
                      <label htmlFor="rdo3" className="radio-label">
                        <span className="radio-border"></span> Job Seeker{" "}
                      </label>
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        I Am A
                      </label>{" "}
                      <br />
                      <input
                        type="radio"
                        id="rdo4"
                        defaultChecked
                        className="radio-input"
                        name="radio-group"
                      />
                      <label htmlFor="rdo4" className="radio-label">
                        {" "}
                        <span className="radio-border"></span> Student{" "}
                      </label>
                      <input
                        type="radio"
                        id="rdo5"
                        className="radio-input"
                        name="radio-group"
                      />
                      <label htmlFor="rdo5" className="radio-label">
                        <span className="radio-border"></span> Working
                        Professional{" "}
                      </label>
                      <input
                        type="radio"
                        id="rdo6"
                        className="radio-input"
                        name="radio-group"
                      />
                      <label htmlFor="rdo6" className="radio-label">
                        <span className="radio-border"></span> Corporate{" "}
                      </label>
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Password must be at least 8 characters"
                        aria-describedby="emailHelp"
                      />

                      <i className="fa-solid fa-eye position-absolute"></i>
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Type your password again"
                        aria-describedby="emailHelp"
                      />

                      <i className="fa-solid fa-eye position-absolute"></i>
                    </div>

                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Creating your account and you accepting{" "}
                        <a href="/register">Terms & Conditions</a>
                      </label>
                    </div>

                    <button type="submit" className="btn btn-main py-3 mt-3">
                      Create Account
                    </button>

                    <div className="dieyhr_iuhfiderr mt-4">
                      <div className="d-flex align-items-center">
                        <div className="btn btn-main">
                          <img className="me-1" src="images/fb.webp" alt="" />{" "}
                          Facebook
                        </div>

                        <div className="btn btn-main">
                          <img className="me-1" src="images/ggle.webp" alt="" />{" "}
                          Google
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegistrationForm;
