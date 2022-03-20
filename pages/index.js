import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="wrapper ovh">
      <div className="preloader"></div>
      {/* <!-- Sidebar Panel Start --> */}
      <div className="listing_sidebar">
        <div className="siderbar_left_home pt20">
          <a className="sidebar_switch sidebar_close_btn float-end" href="#">
            X
          </a>
          <div className="footer_contact_widget mt100">
            <h3 className="title">Quick contact info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur.
            </p>
          </div>
          <div className="footer_contact_widget">
            <h5 className="title">CONTACT</h5>
            <div className="footer_phone">+1 670 936 46 70</div>
            <p>hello@voiture.com</p>
          </div>
          <div className="footer_about_widget">
            <h5 className="title">OFFICE</h5>
            <p>
              Germany —<br />
              329 Queensberry Street,
              <br />
              North Melbourne VIC 3051
            </p>
          </div>
          <div className="footer_contact_widget">
            <h5 className="title">OPENING HOURS</h5>
            <p>
              Monday – Friday: 09:00AM – 09:00PM
              <br />
              Saturday: 09:00AM – 07:00PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Sidebar Panel End --> */}

      {/* <!-- header top --> */}
      <div className="header_top dn-992">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <div className="header_top_contact_opening_widget text-center text-md-start">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-phone-call"></span>
                      1-800-458-56987
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-map"></span>47 Bakery Street,
                      London, UK
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-clock"></span>Mon - Fri 8:00 -
                      18:00
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-xl-5">
              <div className="header_top_social_widgets text-center text-md-end">
                <ul className="m0">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fab fa-facebook-f"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fab fa-instagram"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fab fa-linkedin"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#logInModal"
                    >
                      Login
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#logInModal"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main Header Nav --> */}
      <header className="header-nav menu_style_home_one transparent main-menu">
        {/* <!-- Ace Responsive Menu --> */}
        <nav>
          <div className="container posr">
            {/* <!-- Menu Toggle btn--> */}
            <div className="menu-toggle">
              <button type="button" id="menu-btn">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <a href="index.html" className="navbar_brand float-start dn-md">
              <img
                className="logo1 img-fluid"
                src="images/header-logo.svg"
                alt="header-logo.svg"
              />
              <img
                className="logo2 img-fluid"
                src="images/header-logo2.svg"
                alt="header-logo2.svg"
              />
            </a>
            {/* <!-- Responsive Menu Structure--> */}
            <ul
              id="respMenu"
              className="ace-responsive-menu text-end"
              data-menu-style="horizontal"
            >
              <li>
                {" "}
                <a href="#">
                  <span className="title">Home</span>
                </a>
                {/* <!-- Level Two--> */}
                <ul>
                  <li>
                    <a href="index.html">Home V1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home V2</a>
                  </li>
                  <li>
                    <a href="index3.html">Home V3</a>
                  </li>
                  <li>
                    <a href="index4.html">Home V4</a>
                  </li>
                  <li>
                    <a href="index5.html">Home V5</a>
                  </li>
                  <li>
                    <a href="index6.html">Home V6</a>
                  </li>
                  <li>
                    <a href="index7.html">Home V7</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="#">
                  <span className="title">Explore</span>
                </a>
                {/* <!-- Level Two--> */}
                <ul>
                  <li>
                    {" "}
                    <a href="#">User Info</a>
                    <ul>
                      <li>
                        <a href="page-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="page-dashboard-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="page-dashboard-listing.html">My Listing</a>
                      </li>
                      <li>
                        <a href="page-dashboard-favorites.html">Favorites</a>
                      </li>
                      <li>
                        <a href="page-dashboard-add-listings.html">
                          Add Listing
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-messages.html">Messages</a>
                      </li>
                      <li>
                        <a href="page-login.html">Logout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-user-profile.html">User Profile</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="#">
                  <span className="title">Listing</span>
                </a>
                <ul>
                  <li>
                    {" "}
                    <a href="#">Listing Styles</a>
                    <ul>
                      <li>
                        <a href="page-list-v1.html">Listing v1</a>
                      </li>
                      <li>
                        <a href="page-list-v2.html">Listing v2</a>
                      </li>
                      <li>
                        <a href="page-list-v3.html">Listing v3</a>
                      </li>
                      <li>
                        <a href="page-list-v4.html">Listing v4</a>
                      </li>
                      <li>
                        <a href="page-list-v5.html">Listing v5</a>
                      </li>
                      <li>
                        <a href="page-list-v6.html">Listing v6</a>
                      </li>
                      <li>
                        <a href="page-list-v7.html">Listing v7</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Listing Map</a>
                    <ul>
                      <li>
                        <a href="page-list-v8.html">Map v1</a>
                      </li>
                      <li>
                        <a href="page-list-v9.html">Map v2</a>
                      </li>
                      <li>
                        <a href="page-list-v10.html">Map v3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Listing Single</a>
                    <ul>
                      <li>
                        <a href="page-car-single-v1.html">Single V1</a>
                      </li>
                      <li>
                        <a href="page-car-single-v2.html">Single V2</a>
                      </li>
                      <li>
                        <a href="page-car-single-v3.html">Single V3</a>
                      </li>
                      <li>
                        <a href="page-car-single-v4.html">Single V4</a>
                      </li>
                      <li>
                        <a href="page-car-single-v5.html">Single V5</a>
                      </li>
                      <li>
                        <a href="page-car-single-v6.html">Single V6</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-dashboard-add-listings.html">New Listing</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="#">
                  <span className="title">Blog</span>
                </a>
                <ul>
                  <li>
                    <a href="page-blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="page-blog-list.html">Blog List</a>
                  </li>
                  <li>
                    <a href="page-blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="#">
                  <span className="title">Shop</span>
                </a>
                <ul>
                  <li>
                    <a href="page-shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="page-shop-cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="page-shop-checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="page-shop-complete-order.html">Complete Order</a>
                  </li>
                  <li>
                    <a href="page-shop-single.html">Single</a>
                  </li>
                  <li>
                    <a href="page-user-profile.html">User Profile</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="#">
                  <span className="title">Pages</span>
                </a>
                <ul>
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page-calculator.html">Calculator</a>
                  </li>
                  <li>
                    <a href="page-compare.html">Compare</a>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="page-error.html">404 Page</a>
                  </li>
                  <li>
                    <a href="page-faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="page-login.html">Login</a>
                  </li>
                  <li>
                    <a href="page-pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a href="page-service.html">Service</a>
                  </li>
                  <li>
                    <a href="page-terms.html">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="page-ui-element.html">UI Elements</a>
                  </li>
                </ul>
              </li>
              <li className="add_listing">
                <a href="page-dashboard-add-listings.html">+ Add Listing</a>
              </li>
              <li className="sidebar_panel">
                <a className="sidebar_switch pt0" href="#">
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <!-- Modal --> */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container p60">
              <div className="row">
                <div className="col-lg-12">
                  <ul
                    className="sign_up_tab nav nav-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content container p0" id="myTabContent">
                <div
                  className="row mt30 tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="col-lg-12">
                    <div className="login_form">
                      <p>
                        New to Cars.com?{" "}
                        <a href="page-register.html">Sign up.</a> Are you a
                        dealer?
                      </p>
                      <form action="#">
                        <div className="mb-2 mr-sm-2">
                          <label className="form-label">
                            Username or email address *
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group mb5">
                          <label className="form-label">Password *</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="exampleCheck3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="exampleCheck3"
                          >
                            Remember me
                          </label>
                          <a className="btn-fpswd float-end" href="#">
                            Lost your password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-log btn-thm mt5"
                        >
                          Sign in
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="row mt30 tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="col-lg-12">
                    <div className="sign_up_form">
                      <p>
                        Already have a profile?{" "}
                        <a href="page-login.html">Sign in.</a>
                      </p>
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">Last Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-label">Email</label>
                              <input type="email" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb20">
                              <label className="form-label">Password</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb20">
                              <label className="form-label">
                                Confirm Password
                              </label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-signup btn-thm mb0"
                        >
                          Sign Up
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main Header Nav For Mobile --> */}
      <div id="page" className="stylehome1 h0">
        <div className="mobile-menu">
          <div className="header stylehome1">
            <div className="mobile_menu_bar">
              <a className="menubar" href="#menu">
                <small>Menu</small>
                <span></span>
              </a>
            </div>
            <div className="mobile_menu_main_logo">
              <img
                className="nav_logo_img img-fluid"
                src="images/header-logo2.svg"
                alt="images/header-logo2.png"
              />
            </div>
          </div>
        </div>
        {/* <!-- /.mobile-menu --> */}
        <nav id="menu" className="stylehome1">
          <ul>
            <li>
              <span>Home</span>
              <ul>
                <li>
                  <a href="index.html">Home V1</a>
                </li>
                <li>
                  <a href="index2.html">Home V2</a>
                </li>
                <li>
                  <a href="index3.html">Home V3</a>
                </li>
                <li>
                  <a href="index4.html">Home V4</a>
                </li>
                <li>
                  <a href="index5.html">Home V5</a>
                </li>
                <li>
                  <a href="index6.html">Home V6</a>
                </li>
                <li>
                  <a href="index7.html">Home V7</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Explore</span>
              <ul>
                <li>
                  <span>User Dashboard</span>
                  <ul>
                    <li>
                      <a href="page-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="page-dashboard-profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="page-dashboard-listing.html">My Listing</a>
                    </li>
                    <li>
                      <a href="page-dashboard-favorites.html">Favorites</a>
                    </li>
                    <li>
                      <a href="page-dashboard-add-listings.html">Add Listing</a>
                    </li>
                    <li>
                      <a href="page-dashboard-messages.html">Messages</a>
                    </li>
                    <li>
                      <a href="page-login.html">Login</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="page-user-profile.html">User Profile</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Listings</span>
              <ul>
                <li>
                  <span>Listing Styles</span>
                  <ul>
                    <li>
                      <a href="page-list-v1.html">Lising V1</a>
                    </li>
                    <li>
                      <a href="page-list-v2.html">Lising V2</a>
                    </li>
                    <li>
                      <a href="page-list-v3.html">Lising V3</a>
                    </li>
                    <li>
                      <a href="page-list-v4.html">Lising V4</a>
                    </li>
                    <li>
                      <a href="page-list-v5.html">Lising V5</a>
                    </li>
                    <li>
                      <a href="page-list-v6.html">Lising V6</a>
                    </li>
                    <li>
                      <a href="page-list-v7.html">Lising V7</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Listing Map</span>
                  <ul>
                    <li>
                      <a href="page-list-v8.html">Map V1</a>
                    </li>
                    <li>
                      <a href="page-list-v9.html">Map V2</a>
                    </li>
                    <li>
                      <a href="page-list-v10.html">Map V3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Listing Single</span>
                  <ul>
                    <li>
                      <a href="page-car-single-v1.html">Single V1</a>
                    </li>
                    <li>
                      <a href="page-car-single-v2.html">Single V2</a>
                    </li>
                    <li>
                      <a href="page-car-single-v3.html">Single V3</a>
                    </li>
                    <li>
                      <a href="page-car-single-v4.html">Single V4</a>
                    </li>
                    <li>
                      <a href="page-car-single-v5.html">Single V5</a>
                    </li>
                    <li>
                      <a href="page-car-single-v6.html">Single V6</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="page-dashboard-add-listings.html">Add Listing</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Blog</span>
              <ul>
                <li>
                  <a href="page-blog-grid.html">Blog Grid</a>
                </li>
                <li>
                  <a href="page-blog-list.html">Blog List</a>
                </li>
                <li>
                  <a href="page-blog-single.html">Blog Single</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Shop</span>
              <ul>
                <li>
                  <a href="page-shop.html">Shop</a>
                </li>
                <li>
                  <a href="page-shop-cart.html">Shop Cart</a>
                </li>
                <li>
                  <a href="page-shop-checkout.html">Shop Checkout</a>
                </li>
                <li>
                  <a href="page-shop-complete-order.html">Order Completed</a>
                </li>
                <li>
                  <a href="page-shop-single.html">Shop Single</a>
                </li>
                <li>
                  <a href="page-user-profile.html">User Profile</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Pages</span>
              <ul>
                <li>
                  <a href="page-about.html">About Us</a>
                </li>
                <li>
                  <a href="page-calculator.html">Loan Calculator</a>
                </li>
                <li>
                  <a href="page-compare.html">Compare</a>
                </li>
                <li>
                  <a href="page-contact.html">Contact</a>
                </li>
                <li>
                  <a href="page-error.html">Error</a>
                </li>
                <li>
                  <a href="page-faq.html">Faq</a>
                </li>
                <li>
                  <a href="page-login.html">Login</a>
                </li>
                <li>
                  <a href="page-pricing.html">Pricing Table</a>
                </li>
                <li>
                  <a href="page-register.html">Sign up</a>
                </li>
                <li>
                  <a href="page-service.html">Service</a>
                </li>
                <li>
                  <a href="page-terms.html">Terms & Condition</a>
                </li>
                <li>
                  <a href="page-ui-element.html">UI Elements</a>
                </li>
              </ul>
            </li>
            {/* <!-- Only for Mobile View --> */}
            <li className="mm-add-listing">
              <span className="border-none">
                <span className="mmenu-contact-info">
                  <span className="phone-num">
                    <i className="flaticon-map"></i>{" "}
                    <a href="#">47 Bakery Street, London, UK</a>
                  </span>
                  <span className="phone-num">
                    <i className="flaticon-phone-call"></i>{" "}
                    <a href="#">1-800-458-56987</a>
                  </span>
                  <span className="phone-num">
                    <i className="flaticon-clock"></i>{" "}
                    <a href="#">Mon - Fri 8:00 - 18:00</a>
                  </span>
                </span>
                <span className="social-links">
                  <a href="#">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                  <a href="#">
                    <span className="fab fa-instagram"></span>
                  </a>
                  <a href="#">
                    <span className="fab fa-youtube"></span>
                  </a>
                  <a href="#">
                    <span className="fab fa-pinterest"></span>
                  </a>
                </span>
              </span>
            </li>
          </ul>
        </nav>
      </div>

      {/* <!-- Home Design --> */}
      <section className="home-one bg-home1">
        <div className="container">
          <div className="row posr">
            <div className="col-lg-10 m-auto">
              <div className="home_content home1_style">
                <div className="home-text text-center mb30">
                  <h2 className="title">
                    <span className="aminated-object1">
                      <img
                        className="objects"
                        src="images/home/title-bottom-border.svg"
                        alt=""
                      />
                    </span>
                    Find Your Next Match
                  </h2>
                  <p className="para">
                    Find the right price, dealer and advice.
                  </p>
                </div>
                <div className="advance_search_panel">
                  <div className="row">
                    <div className="col-lg-12">
                      <ul
                        className="nav nav-pills justify-content-center"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-allstatus-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-allstatus"
                            type="button"
                            role="tab"
                            aria-controls="pills-allstatus"
                            aria-selected="true"
                          >
                            All Status
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-usedcar-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-usedcar"
                            type="button"
                            role="tab"
                            aria-controls="pills-usedcar"
                            aria-selected="false"
                          >
                            Used Cars
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-newcar-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-newcar"
                            type="button"
                            role="tab"
                            aria-controls="pills-newcar"
                            aria-selected="false"
                          >
                            New Cars
                          </button>
                        </li>
                      </ul>
                      <div className="adss_bg_stylehome1">
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-allstatus"
                            role="tabpanel"
                            aria-labelledby="pills-allstatus-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="home1_advance_search_wrapper">
                                  <ul className="mb0 text-center">
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_brand">
                                          <h6 className="title">Make</h6>
                                          <select className="selectpicker">
                                            <option>Select Makes</option>
                                            <option>Audi</option>
                                            <option>Bentley</option>
                                            <option>BMW</option>
                                            <option>Ford</option>
                                            <option>Honda</option>
                                            <option>Mercedes</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_models">
                                          <h6 className="title">Models</h6>
                                          <select className="selectpicker">
                                            <option>Select Models</option>
                                            <option>A3 Sportback</option>
                                            <option>A4</option>
                                            <option>A6</option>
                                            <option>Q5</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_prices">
                                          <h6 className="title">Price</h6>
                                          <select className="selectpicker">
                                            <option>All Price</option>
                                            <option>No max Price</option>
                                            <option>$2,000</option>
                                            <option>$5,000</option>
                                            <option>$10,000</option>
                                            <option>$15,000</option>
                                            <option>$5,000</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="d-block">
                                        <button className="btn btn-thm advnc_search_form_btn">
                                          <span className="flaticon-magnifiying-glass"></span>
                                          Search
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-usedcar"
                            role="tabpanel"
                            aria-labelledby="pills-usedcar-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="home1_advance_search_wrapper">
                                  <ul className="mb0 text-center">
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_brand">
                                          <h6 className="title">Make</h6>
                                          <select className="selectpicker">
                                            <option>Select Makes</option>
                                            <option>Audi</option>
                                            <option>Bentley</option>
                                            <option>BMW</option>
                                            <option>Ford</option>
                                            <option>Honda</option>
                                            <option>Mercedes</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_models">
                                          <h6 className="title">Models</h6>
                                          <select className="selectpicker">
                                            <option>Select Models</option>
                                            <option>A3 Sportback</option>
                                            <option>A4</option>
                                            <option>A6</option>
                                            <option>Q5</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_prices">
                                          <h6 className="title">Price</h6>
                                          <select className="selectpicker">
                                            <option>All Price</option>
                                            <option>No max Price</option>
                                            <option>$2,000</option>
                                            <option>$5,000</option>
                                            <option>$10,000</option>
                                            <option>$15,000</option>
                                            <option>$5,000</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <button className="btn btn-thm advnc_search_form_btn">
                                          <span className="flaticon-magnifiying-glass"></span>
                                          Search
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-newcar"
                            role="tabpanel"
                            aria-labelledby="pills-newcar-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="home1_advance_search_wrapper">
                                  <ul className="mb0 text-center">
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_brand">
                                          <h6 className="title">Make</h6>
                                          <select className="selectpicker">
                                            <option>Select Makes</option>
                                            <option>Audi</option>
                                            <option>Bentley</option>
                                            <option>BMW</option>
                                            <option>Ford</option>
                                            <option>Honda</option>
                                            <option>Mercedes</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_models">
                                          <h6 className="title">Models</h6>
                                          <select className="selectpicker">
                                            <option>Select Models</option>
                                            <option>A3 Sportback</option>
                                            <option>A4</option>
                                            <option>A6</option>
                                            <option>Q5</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_prices">
                                          <h6 className="title">Price</h6>
                                          <select className="selectpicker">
                                            <option>All Price</option>
                                            <option>No max Price</option>
                                            <option>$2,000</option>
                                            <option>$5,000</option>
                                            <option>$10,000</option>
                                            <option>$15,000</option>
                                            <option>$5,000</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <button className="btn btn-thm advnc_search_form_btn">
                                          <span className="flaticon-magnifiying-glass"></span>
                                          Search
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Car Category --> */}
      <section className="car-category mobile_space bgc-f9 z-2 pb100">
        <div className="container">
          <div className="row">
            <div
              className="col-6 col-sm-6 col-md-4 col-lg col-xl wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="category_item">
                <div className="thumb">
                  <img src="images/category-item/1.png" alt="1.png" />
                </div>
                <div className="details">
                  <p className="title">
                    <a href="page-car-single-v1.html">Compact</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-4 col-lg col-xl wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="category_item">
                <div className="thumb">
                  <img src="images/category-item/2.png" alt="2.png" />
                </div>
                <div className="details">
                  <p className="title">
                    <a href="page-car-single-v1.html">Sedan</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-4 col-lg col-xl wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="category_item">
                <div className="thumb">
                  <img src="images/category-item/3.png" alt="3.png" />
                </div>
                <div className="details">
                  <p className="title">
                    <a href="page-car-single-v1.html">SUV</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-4 col-lg col-xl wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.7s"
            >
              <div className="category_item">
                <div className="thumb">
                  <img src="images/category-item/4.png" alt="4.png" />
                </div>
                <div className="details">
                  <p className="title">
                    <a href="page-car-single-v1.html">Convertible</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-lg col-xl wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.9s"
            >
              <div className="category_item">
                <div className="thumb">
                  <img src="images/category-item/5.png" alt="5.png" />
                </div>
                <div className="details">
                  <p className="title">
                    <a href="page-car-single-v1.html">Coupe</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Featured Product  --> */}
      <section className="featured-product">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Featured Listings</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="popular_listing_sliders row">
                {/* <!-- Nav tabs --> */}
                <div
                  className="nav nav-tabs col-lg-12 justify-content-center"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    All Status
                  </button>
                  <button
                    className="nav-link"
                    id="nav-shopping-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-shopping"
                    role="tab"
                    aria-controls="nav-shopping"
                    aria-selected="false"
                  >
                    New Cars
                  </button>
                  <button
                    className="nav-link"
                    id="nav-hotels-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-hotels"
                    role="tab"
                    aria-controls="nav-hotels"
                    aria-selected="false"
                  >
                    Used Cars
                  </button>
                </div>
                {/* <!-- Tab panes --> */}
                <div className="tab-content col-lg-12" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/1.jpg" alt="1.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$129</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Volvo XC90 - 2020
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/5.jpg" alt="5.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$129</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Audi A8 L 55 - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/2.jpg" alt="2.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$56</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Mercedes-Benz S 560 - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/6.jpg" alt="6.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$56</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Land Rover Range Rover HSE Westminster
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/3.jpg" alt="3.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$230</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  BMW M8 Gran Coupe Base - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/7.jpg" alt="7.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$230</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Bentley Bentayga V8 - 2020
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag blue">SPECIAL</div>
                            <img src="images/listing/4.jpg" alt="4.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$478</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Nıssan Qasqai - Sky Pack
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/8.jpg" alt="8.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$478</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Ferrari 488 Spider Base - 2019
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-shopping"
                    role="tabpanel"
                    aria-labelledby="nav-shopping-tab"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/1.jpg" alt="1.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$129</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Volvo XC90 - 2020
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/5.jpg" alt="5.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$129</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Audi A8 L 55 - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/2.jpg" alt="2.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$56</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Mercedes-Benz S 560 - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/6.jpg" alt="6.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$56</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Land Rover Range Rover HSE Westminster
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/3.jpg" alt="3.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$230</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  BMW M8 Gran Coupe Base - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/7.jpg" alt="7.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$230</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Bentley Bentayga V8 - 2020
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag blue">SPECIAL</div>
                            <img src="images/listing/4.jpg" alt="4.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$478</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Nıssan Qasqai - Sky Pack
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/8.jpg" alt="8.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$478</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Ferrari 488 Spider Base - 2019
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-hotels"
                    role="tabpanel"
                    aria-labelledby="nav-hotels-tab"
                  >
                    <div className="row">
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/1.jpg" alt="1.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$129</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Volvo XC90 - 2020
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/5.jpg" alt="5.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$129</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Audi A8 L 55 - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/2.jpg" alt="2.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$56</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Mercedes-Benz S 560 - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/6.jpg" alt="6.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$56</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Land Rover Range Rover HSE Westminster
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/3.jpg" alt="3.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$230</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  BMW M8 Gran Coupe Base - 2021
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/7.jpg" alt="7.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$230</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Bentley Bentayga V8 - 2020
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag blue">SPECIAL</div>
                            <img src="images/listing/4.jpg" alt="4.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$478</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Nıssan Qasqai - Sky Pack
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-listing">
                          <div className="thumb">
                            <div className="tag">FEATURED</div>
                            <img src="images/listing/8.jpg" alt="8.jpg" />
                            <div className="thmb_cntnt2">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-photo-camera mr3"></span>{" "}
                                    22
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a className="text-white" href="#">
                                    <span className="flaticon-play-button mr3"></span>{" "}
                                    3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="thmb_cntnt3">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-shuffle-arrows"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-heart"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details">
                            <div className="wrapper">
                              <h5 className="price">$478</h5>
                              <h6 className="title">
                                <a href="page-car-single-v1.html">
                                  Ferrari 488 Spider Base - 2019
                                </a>
                              </h6>
                              <div className="listign_review">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">4.7</a>
                                  </li>
                                  <li className="list-inline-item">
                                    (684 reviews)
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="listing_footer">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-road-perspective me-2"></span>
                                    77362
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gas-station me-2"></span>
                                    Diesel
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <span className="flaticon-gear me-2"></span>
                                    Automatic
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt20">
            <div className="col-lg-12">
              <div className="text-center">
                <a href="page-list-v1.html" className="more_listing">
                  Show All Cars{" "}
                  <span className="icon">
                    <span className="fas fa-plus"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Why Chose us  --> */}
      <section className="why-chose pt0 pb90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-6 col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="why_chose_us">
                <div className="icon float-start">
                  <span className="flaticon-price-tag"></span>
                </div>
                <div className="details">
                  <h5 className="title">Best Price</h5>
                  <p>
                    Our stress-free finance department that can find financial
                    solutions to save you money.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="why_chose_us">
                <div className="icon float-start style2">
                  <span className="flaticon-car"></span>
                </div>
                <div className="details">
                  <h5 className="title">Trusted By Thousands</h5>
                  <p>
                    Our stress-free finance department that can find financial
                    solutions to save you money.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="why_chose_us">
                <div className="icon float-start style3">
                  <span className="flaticon-trust"></span>
                </div>
                <div className="details">
                  <h5 className="title">Wide Range of Brands</h5>
                  <p>
                    Our stress-free finance department that can find financial
                    solutions to save you money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Delivery Divider --> */}
      <section className="deliver-divider bg-img1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="posr">
                <div className="home1_divider_video_pop">
                  <div className="video_popup_icon">
                    <a
                      className="video_popup_btn popup-img popup-youtube"
                      href="https://www.youtube.com/watch?v=R7xbhKIiw4Y"
                    >
                      <span className="flaticon-play"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-xl-5">
              <div className="home1_divider_content">
                <h2 className="title">We Make Finding The Right Car Simple</h2>
                <p className="para">
                  At Voiture what matters to us is making your car search and
                  buying experience as simple as possible, so you can find the
                  right car quickly and get on with making it yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Popular Listing --> */}
      <section className="popular-listing pb80 bg-ptrn1 bgc-heading-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="text-white">Popular Listings</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="home1_popular_listing">
              <div className="listing_item_4grid_slider dots_none">
                <div className="item">
                  <div className="car-listing">
                    <div className="thumb">
                      <div className="tag">FEATURED</div>
                      <img src="images/listing/1.jpg" alt="1.jpg" />
                      <div className="thmb_cntnt2">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a className="text-white" href="#">
                              <span className="flaticon-photo-camera mr3"></span>{" "}
                              22
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-white" href="#">
                              <span className="flaticon-play-button mr3"></span>{" "}
                              3
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="thmb_cntnt3">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-shuffle-arrows"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="details">
                      <div className="wrapper">
                        <h5 className="price">$129</h5>
                        <h6 className="title">
                          <a href="page-car-single-v1.html">
                            Volvo XC90 - 2020
                          </a>
                        </h6>
                        <div className="listign_review">
                          <ul className="mb0">
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">4.7</a>
                            </li>
                            <li className="list-inline-item">(684 reviews)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="listing_footer">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-road-perspective me-2"></span>
                              77362
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-gas-station me-2"></span>
                              Diesel
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-gear me-2"></span>
                              Automatic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="car-listing">
                    <div className="thumb">
                      <div className="tag">FEATURED</div>
                      <img src="images/listing/2.jpg" alt="2.jpg" />
                      <div className="thmb_cntnt2">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a className="text-white" href="#">
                              <span className="flaticon-photo-camera mr3"></span>{" "}
                              22
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-white" href="#">
                              <span className="flaticon-play-button mr3"></span>{" "}
                              3
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="thmb_cntnt3">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-shuffle-arrows"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="details">
                      <div className="wrapper">
                        <h5 className="price">$56</h5>
                        <h6 className="title">
                          <a href="page-car-single-v1.html">
                            Mercedes-Benz S 560 - 2021
                          </a>
                        </h6>
                        <div className="listign_review">
                          <ul className="mb0">
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">4.7</a>
                            </li>
                            <li className="list-inline-item">(684 reviews)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="listing_footer">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-road-perspective me-2"></span>
                              77362
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-gas-station me-2"></span>
                              Diesel
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-gear me-2"></span>
                              Automatic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="car-listing">
                    <div className="thumb">
                      <div className="tag">FEATURED</div>
                      <img src="images/listing/3.jpg" alt="3.jpg" />
                      <div className="thmb_cntnt2">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a className="text-white" href="#">
                              <span className="flaticon-photo-camera mr3"></span>{" "}
                              22
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-white" href="#">
                              <span className="flaticon-play-button mr3"></span>{" "}
                              3
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="thmb_cntnt3">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-shuffle-arrows"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="details">
                      <div className="wrapper">
                        <h5 className="price">$230</h5>
                        <h6 className="title">
                          <a href="page-car-single-v1.html">
                            BMW M8 Gran Coupe Base - 2021
                          </a>
                        </h6>
                        <div className="listign_review">
                          <ul className="mb0">
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">4.7</a>
                            </li>
                            <li className="list-inline-item">(684 reviews)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="listing_footer">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-road-perspective me-2"></span>
                              77362
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-gas-station me-2"></span>
                              Diesel
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-gear me-2"></span>
                              Automatic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="car-listing">
                    <div className="thumb">
                      <div className="tag blue">SPECIAL</div>
                      <img src="images/listing/4.jpg" alt="4.jpg" />
                      <div className="thmb_cntnt2">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a className="text-white" href="#">
                              <span className="flaticon-photo-camera mr3"></span>{" "}
                              22
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-white" href="#">
                              <span className="flaticon-play-button mr3"></span>{" "}
                              3
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="thmb_cntnt3">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-shuffle-arrows"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="details">
                      <div className="wrapper">
                        <h5 className="price">$478</h5>
                        <h6 className="title">
                          <a href="page-car-single-v1.html">
                            Nıssan Qasqai - Sky Pack
                          </a>
                        </h6>
                        <div className="listign_review">
                          <ul className="mb0">
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">4.7</a>
                            </li>
                            <li className="list-inline-item">(684 reviews)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="listing_footer">
                        <ul className="mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-road-perspective me-2"></span>
                              77362
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-gas-station me-2"></span>
                              Diesel
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-gear me-2"></span>
                              Automatic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Funfact --> */}
      <section className="our-funfact pt50 pb30">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="funfact_one text-center">
                <div className="details">
                  <div className="timer">27600</div>
                  <p className="ff_title">CARS FOR SALE</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="funfact_one text-center">
                <div className="details">
                  <div className="timer">6500</div>
                  <p className="ff_title">DEALER REVIEWS</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="funfact_one text-center">
                <div className="details">
                  <div className="timer">8230</div>
                  <p className="ff_title">VISITORS PER DAY</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.7s"
            >
              <div className="funfact_one text-center">
                <div className="details">
                  <div className="timer">5250</div>
                  <p className="ff_title">VERIFIED DEALERS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials  --> */}
      <section className="our-testimonials-home1 pt120 pb120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial_slider_home1">
                <div className="item">
                  <div className="testimonial_box">
                    <div className="thumb">
                      <img
                        className="rounded-circle"
                        src="images/testimonial/1.png"
                        alt="1.png"
                      />
                      <h4 className="title">
                        Marvin McKinney <br />
                        <small>Marketing Coordinator</small>
                      </h4>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <p>
                        Aliquam lorem ante, dapibus in, viverra nisi quis,
                        feugiat a, tellus. Phasellus viverra deo nulla ut metus
                        varius qui laoreet. Quisque sum rutrum. Aenean
                        imperdiet. Etiam ultricies cum sociis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_box">
                    <div className="thumb">
                      <img
                        className="rounded-circle"
                        src="images/testimonial/2.png"
                        alt="2.png"
                      />
                      <h4 className="title">
                        Brooklyn Simmons <br />
                        <small>President of Sales</small>
                      </h4>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <p>
                        Aliquam lorem ante, dapibus in, viverra nisi quis,
                        feugiat a, tellus. Phasellus viverra deo nulla ut metus
                        varius qui laoreet. Quisque sum rutrum. Aenean
                        imperdiet. Etiam ultricies cum sociis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_box">
                    <div className="thumb">
                      <img
                        className="rounded-circle"
                        src="images/testimonial/1.png"
                        alt="1.png"
                      />
                      <h4 className="title">
                        Marvin McKinney <br />
                        <small>Marketing Coordinator</small>
                      </h4>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <p>
                        Aliquam lorem ante, dapibus in, viverra nisi quis,
                        feugiat a, tellus. Phasellus viverra deo nulla ut metus
                        varius qui laoreet. Quisque sum rutrum. Aenean
                        imperdiet. Etiam ultricies cum sociis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_box">
                    <div className="thumb">
                      <img
                        className="rounded-circle"
                        src="images/testimonial/2.png"
                        alt="2.png"
                      />
                      <h4 className="title">
                        Brooklyn Simmons <br />
                        <small>President of Sales</small>
                      </h4>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <p>
                        Aliquam lorem ante, dapibus in, viverra nisi quis,
                        feugiat a, tellus. Phasellus viverra deo nulla ut metus
                        varius qui laoreet. Quisque sum rutrum. Aenean
                        imperdiet. Etiam ultricies cum sociis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_box">
                    <div className="thumb">
                      <img
                        className="rounded-circle"
                        src="images/testimonial/1.png"
                        alt="1.png"
                      />
                      <h4 className="title">
                        Marvin McKinney <br />
                        <small>Marketing Coordinator</small>
                      </h4>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <p>
                        Aliquam lorem ante, dapibus in, viverra nisi quis,
                        feugiat a, tellus. Phasellus viverra deo nulla ut metus
                        varius qui laoreet. Quisque sum rutrum. Aenean
                        imperdiet. Etiam ultricies cum sociis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_box">
                    <div className="thumb">
                      <img
                        className="rounded-circle"
                        src="images/testimonial/2.png"
                        alt="2.png"
                      />
                      <h4 className="title">
                        Brooklyn Simmons <br />
                        <small>President of Sales</small>
                      </h4>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <p>
                        Aliquam lorem ante, dapibus in, viverra nisi quis,
                        feugiat a, tellus. Phasellus viverra deo nulla ut metus
                        varius qui laoreet. Quisque sum rutrum. Aenean
                        imperdiet. Etiam ultricies cum sociis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-blog pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Recent Articles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="for_blog">
                <div className="thumb">
                  <div className="tag">BLOG</div>
                  <img
                    className="img-whp"
                    src="images/blog/1.jpg"
                    alt="1.jpg"
                  />
                </div>
                <div className="details">
                  <div className="wrapper">
                    <div className="bp_meta">
                      <ul>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-user"></span>Brooklyn
                            Simmons
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-chat"></span>12 Comments
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-calendar-1"></span>April
                            25, 2021
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="page-blog-single.html">
                        2021 BMW 540i M Sport Review: Light on Sport, Heavy on
                        Tech
                      </a>
                    </h4>
                    <a href="page-blog-single.html" className="more_listing">
                      Read More{" "}
                      <span className="icon">
                        <span className="fas fa-plus"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="for_blog">
                <div className="thumb">
                  <div className="tag">SUV</div>
                  <img
                    className="img-whp"
                    src="images/blog/2.jpg"
                    alt="2.jpg"
                  />
                </div>
                <div className="details">
                  <div className="wrapper">
                    <div className="bp_meta">
                      <ul>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-user"></span>Brooklyn
                            Simmons
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-chat"></span>12 Comments
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-calendar-1"></span>April
                            25, 2021
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="page-blog-single.html">
                        2022 Volkswagen Taos First Drive: Exactly as Good as It
                        Needs to Be
                      </a>
                    </h4>
                    <a href="page-blog-single.html" className="more_listing">
                      Read More{" "}
                      <span className="icon">
                        <span className="fas fa-plus"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="for_blog">
                <div className="thumb">
                  <div className="tag">2021</div>
                  <img
                    className="img-whp"
                    src="images/blog/3.jpg"
                    alt="3.jpg"
                  />
                </div>
                <div className="details">
                  <div className="wrapper">
                    <div className="bp_meta">
                      <ul>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-user"></span>Brooklyn
                            Simmons
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-chat"></span>12 Comments
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="page-blog-single.html">
                            <span className="flaticon-calendar-1"></span>April
                            25, 2021
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="page-blog-single.html">
                        2021 Kia Sorento Hybrid Review: Big Vehicle With
                        Small-Vehicle Fuel Economy
                      </a>
                    </h4>
                    <a href="page-blog-single.html" className="more_listing">
                      Read More{" "}
                      <span className="icon">
                        <span className="fas fa-plus"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-partner pt0 pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Popular Makes</h2>
              </div>
            </div>
          </div>
          <div className="partner_divider">
            <div className="row">
              <div
                className="col-6 col-xs-6 col-sm-4 col-xl-2 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="partner_item">
                  <img src="images/partners/1.png" alt="1.png" />
                </div>
              </div>
              <div
                className="col-6 col-xs-6 col-sm-4 col-xl-2 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="partner_item">
                  <img src="images/partners/2.png" alt="2.png" />
                </div>
              </div>
              <div
                className="col-6 col-xs-6 col-sm-4 col-xl-2 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="partner_item">
                  <img src="images/partners/3.png" alt="3.png" />
                </div>
              </div>
              <div
                className="col-6 col-xs-6 col-sm-4 col-xl-2 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.7s"
              >
                <div className="partner_item">
                  <img src="images/partners/4.png" alt="4.png" />
                </div>
              </div>
              <div
                className="col-6 col-xs-6 col-sm-4 col-xl-2 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.9s"
              >
                <div className="partner_item">
                  <img src="images/partners/5.png" alt="5.png" />
                </div>
              </div>
              <div
                className="col-6 col-xs-6 col-sm-4 col-xl-2 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1.1s"
              >
                <div className="partner_item">
                  <img src="images/partners/6.png" alt="6.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_one pt50 pb25">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xl-7">
              <div className="footer_about_widget text-start">
                <div className="logo mb40 mb0-sm">
                  <img src="images/header-logo.svg" alt="header-logo.png" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-xl-5">
              <div className="footer_menu_widget text-start text-md-end mt15">
                <ul>
                  <li className="list-inline-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Explore</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Listings</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Blog</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Shop</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Pages</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container pt80 pt20-sm pb70 pb0-sm">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="footer_about_widget">
                <h5 className="title">OFFICE</h5>
                <p>
                  Germany —<br />
                  329 Queensberry Street,
                  <br />
                  North Melbourne VIC 3051
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="footer_contact_widget">
                <h5 className="title">NEED HELP</h5>
                <div className="footer_phone">+1 670 936 46 70</div>
                <p>hello@voiture.com</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="footer_contact_widget">
                <h5 className="title">OPENING HOURS</h5>
                <p>
                  Monday – Friday: 09:00AM – 09:00PM
                  <br />
                  Saturday: 09:00AM – 07:00PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="footer_contact_widget">
                <h5 className="title">KEEP IN TOUCH</h5>
                <form className="footer_mailchimp_form">
                  <div className="wrapper">
                    <div className="col-auto">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email..."
                      />
                      <button type="submit">GO</button>
                    </div>
                  </div>
                </form>
                <p>Get latest updates and offers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8 col-xl-9">
              <div className="copyright-widget mt5 text-start mb20-sm">
                <p>CreativeLayers © 2022. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer_social_widget text-start text-md-end">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a className="scrollToHome" href="#">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}
