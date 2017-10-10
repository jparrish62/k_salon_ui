import React, { Component } from 'react';
import {Link}               from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-static-top yamm ms-navbar ms-navbar-dark">
        <div className="container container-full">
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">
            <span className="ms-logo ms-logo-sm">S</span>
            <span className="ms-title">Salon
              <strong>Karma</strong>
            </span>
          </a>
        </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="dropdown active">
                <Link to={"/Stylist"} className="dropdown-toggle animated fadeIn animation-delay-4" data-toggle="dropdown" data-hover="dropdown" data-name="home">Home
                <i className="zmdi zmdi-chevron-down"></i></Link>
                <ul className="dropdown-menu">
                  <li>
                    <div className="ms-menu-double">
                      <ul className="ms-menu-double-main-menu">
                        <li>
                          <Link to={"/"} data-hover="tab">
                            <i className="zmdi zmdi-desktop-windows"></i>Home Page</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle animated fadeIn animation-delay-5" data-toggle="dropdown" data-hover="dropdown" data-name="page">Stylist
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-left animated-2x animated fadeIn">
                  <li className="dropdown-submenu">
                    <Link to={"/Stylist"} className="has_children">View Stylists</Link>
                  </li>
                  <li className="dropdown-submenu">
                    <Link to={"/CreateStylist"}>Create Stylist</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown yamm-fw">
                <a href="#" className="dropdown-toggle animated fadeIn animation-delay-6" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="component">Log In
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-megamenu animated fadeIn animated-2x">
                  <li>
                    <div className="row">
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInLeft animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-bold"></i> Bootstrap CSS</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-typography.html">
                                <i className="fa fa-font"></i> Typography</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-headers.html">
                                <i className="fa fa-header"></i> Headers</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-dividers.html">
                                <i className="fa fa-arrows-h"></i> Dividers</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-blockquotes.html">
                                <i className="fa fa-quote-right"></i> Blockquotes</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-forms.html">
                                <i className="fa fa-check-square-o"></i> Forms
                                <span className="label label-info pull-right">
                                  <i className="zmdi zmdi-long-arrow-up no-mr"></i> 1.5</span>
                              </a>
                            </li>
                            <li>
                              <a className="withripple" href="component-tables.html">
                                <i className="fa fa-table"></i> Tables</a>
                            </li>
                          </ul>
                        </div>
                        <div className="megamenu-block animated fadeInLeft animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-hand-o-up"></i> Buttons</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-basic-buttons.html">
                                <i className="fa fa-arrow-circle-right"></i> Basic Buttons</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-buttons-components.html">
                                <i className="fa fa-arrow-circle-right"></i> Buttons Components</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-social-buttons.html">
                                <i className="fa fa-arrow-circle-right"></i> Social Buttons
                                <span className="label label-info pull-right">
                                  <i className="zmdi zmdi-long-arrow-up no-mr"></i> 1.3</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInLeft animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-list-alt"></i> Basic Components</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-panels.html">
                                <i className="zmdi zmdi-view-agenda"></i> Panels</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-alerts.html">
                                <i className="zmdi zmdi-info"></i> Alerts &amp; Wells</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-labels.html">
                                <i className="zmdi zmdi-tag"></i> Labels &amp; Badges</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-lists.html">
                                <i className="zmdi zmdi-view-list"></i> Lists</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-thumbnails.html">
                                <i className="zmdi zmdi-image-o"></i> Thumbnails</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-carousels.html">
                                <i className="zmdi zmdi-view-carousel"></i> Carousels</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-modals.html">
                                <i className="zmdi zmdi-window-maximize"></i> Modals</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-tooltip.html">
                                <i className="zmdi zmdi-pin-help"></i> Tooltip &amp; Popover</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-progress-bars.html">
                                <i className="zmdi zmdi-view-headline"></i> Progress Bars</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-pagination.html">
                                <i className="zmdi zmdi-n-2-square"></i> Pagination</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-dropdowns.html">
                                <i className="fa fa-info"></i> Dropdowns</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInRight animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="zmdi zmdi-folder-star-alt"></i> Extra Components</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-cards.html">
                                <i className="zmdi zmdi-card-membership"></i> Cards</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-composite-cards.html">
                                <i className="zmdi zmdi-card-giftcard"></i> Composite Cards</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-counters.html">
                                <i className="zmdi zmdi-n-6-square"></i> Counters</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-audio-video.html">
                                <i className="zmdi zmdi-play-circle"></i> Audio &amp; Video</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-masonry.html">
                                <i className="zmdi zmdi-view-dashboard"></i> Masonry Layer</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-snackbar.html">
                                <i className="zmdi zmdi-notifications-active"></i> SnackBar
                                <span className="label label-success pull-right">1.2</span>
                              </a>
                            </li>
                            <li>
                              <a className="withripple" href="component-lightbox.html">
                                <i className="zmdi zmdi-collection-image-o"></i> Lightbox
                                <span className="label label-success pull-right">1.5</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="megamenu-block animated fadeInRight animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="zmdi zmdi-tab"></i> Collapses &amp; Tabs</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-collapses.html">
                                <i className="zmdi zmdi-view-day"></i> Collapses</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-horizontal-tabs.html">
                                <i className="zmdi zmdi-tab"></i> Horitzontal Tabs</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-vertical-tabs.html">
                                <i className="zmdi zmdi-menu"></i> Vertical Tabs</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInRight animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-briefcase"></i> Icons</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-icons-basic.html">
                                <i className="fa fa-arrow-circle-right"></i> Basic Icons</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-icons-fontawesome.html">
                                <i className="fa fa-arrow-circle-right"></i> Font Awesome</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-icons-iconic.html">
                                <i className="fa fa-arrow-circle-right"></i> Material Design Iconic</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-icons-glyphicons.html">
                                <i className="fa fa-arrow-circle-right"></i> Glyphicons</a>
                            </li>
                          </ul>
                        </div>
                        <div className="megamenu-block animated fadeInRight animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-area-chart"></i> Charts</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-charts-circle.html">
                                <i className="zmdi zmdi-chart-donut"></i> Circle Charts</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-charts-bar.html">
                                <i className="fa fa-bar-chart"></i> Bars Charts</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-charts-line.html">
                                <i className="fa fa-line-chart"></i> Line Charts</a>
                            </li>
                            <li>
                              <a className="withripple" href="component-charts-more.html">
                                <i className="fa fa-pie-chart"></i> More Charts</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="blog">Blog
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="blog-sidebar.html">
                      <i className="zmdi zmdi-view-compact"></i> Blog Sidebar 1</a>
                  </li>
                  <li>
                    <a href="blog-sidebar2.html">
                      <i className="zmdi zmdi-view-compact"></i> Blog Sidebar 2</a>
                  </li>
                  <li>
                    <a href="blog-masonry.html">
                      <i className="zmdi zmdi-view-dashboard"></i> Blog Masonry 1</a>
                  </li>
                  <li>
                    <a href="blog-masonry2.html">
                      <i className="zmdi zmdi-view-dashboard"></i> Blog Masonry 2</a>
                  </li>
                  <li>
                    <a href="blog-full.html">
                      <i className="zmdi zmdi zmdi-view-stream"></i> Blog Full Page 1</a>
                  </li>
                  <li>
                    <a href="blog-full2.html">
                      <i className="zmdi zmdi zmdi-view-stream"></i> Blog Full Page 2</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="blog-post.html">
                      <i className="zmdi zmdi-file-text"></i> Blog Post 1</a>
                  </li>
                  <li>
                    <a href="blog-post2.html">
                      <i className="zmdi zmdi-file-text"></i> Blog Post 2</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle animated fadeIn animation-delay-8" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="portfolio">Portfolio
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="portfolio-filters_sidebar.html">
                      <i className="zmdi zmdi-view-compact"></i> Portfolio Sidebar Filters</a>
                  </li>
                  <li>
                    <a href="portfolio-filters_topbar.html">
                      <i className="zmdi zmdi-view-agenda"></i> Portfolio Topbar Filters</a>
                  </li>
                  <li>
                    <a href="portfolio-filters_sidebar_fluid.html">
                      <i className="zmdi zmdi-view-compact"></i> Portfolio Sidebar Fluid</a>
                  </li>
                  <li>
                    <a href="portfolio-filters_topbar_fluid.html">
                      <i className="zmdi zmdi-view-agenda"></i> Portfolio Topbar Fluid</a>
                  </li>
                  <li>
                    <a href="portfolio-cards.html">
                      <i className="zmdi zmdi-card-membership"></i> Porfolio Cards</a>
                  </li>
                  <li>
                    <a href="portfolio-masonry.html">
                      <i className="zmdi zmdi-view-dashboard"></i> Porfolio Masonry</a>
                  </li>
                  <li>
                    <a href="portfolio-gallery.html" className="with-label">
                      <i className="zmdi zmdi-apps"></i> Picture Gallery
                      <span className="label label-success text-right">1.5</span>
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="portfolio-item.html">
                      <i className="zmdi zmdi-collection-item-1"></i> Portfolio Item 1</a>
                  </li>
                  <li>
                    <a href="portfolio-item2.html">
                      <i className="zmdi zmdi-collection-item-2"></i> Portfolio Item 2</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle animated fadeIn animation-delay-9" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="ecommerce">E-Commerce
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="ecommerce-filters.html">E-Commerce Sidebar</a>
                  </li>
                  <li>
                    <a href="ecommerce-filters-full.html">E-Commerce Sidebar Full</a>
                  </li>
                  <li>
                    <a href="ecommerce-filters-full2.html">E-Commerce Topbar Full</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="ecommerce-item.html">E-Commerce Item</a>
                  </li>
                  <li>
                    <a href="ecommerce-cart.html">E-Commerce Cart</a>
                  </li>
                </ul>
              </li>
              <li className="btn-navbar-menu"><a href="#" className="sb-toggle-left"><i className="zmdi zmdi-menu"></i></a></li>
            </ul>
          </div>
          <a href="#" className="sb-toggle-left btn-navbar-menu">
            <i className="zmdi zmdi-menu"></i>
          </a>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;
