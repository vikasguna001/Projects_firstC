import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LeftSection from '../LeftSection/LeftSection';

function Ticketlist() {
  return (
    <>
    <LeftSection/>
    <Header/>
    <div className="page">
  <div id="page_top" className="section-body top_dark">
    <div className="container-fluid">
      <div className="page-header">
        <div className="left">
          <a href="#" className="icon menu_toggle mr-3">
            <i className="fa  fa-align-left" />
          </a>
          <h1 className="page-title">Ticket List</h1>
        </div>
        <div className="right">
          <div className="input-icon xs-hide mr-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-icon-addon">
              <i className="fe fe-search" />
            </span>
          </div>
          <div className="notification d-flex">
            <div className="dropdown d-flex">
              <a
                className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                data-toggle="dropdown"
              >
                <i className="fa fa-language" />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a className="dropdown-item" href="#">
                  <img className="w20 mr-2" src="assets/images/flags/us.svg" />
                  English
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <img className="w20 mr-2" src="assets/images/flags/es.svg" />
                  Spanish
                </a>
                <a className="dropdown-item" href="#">
                  <img className="w20 mr-2" src="assets/images/flags/jp.svg" />
                  japanese
                </a>
                <a className="dropdown-item" href="#">
                  <img className="w20 mr-2" src="assets/images/flags/bl.svg" />
                  France
                </a>
              </div>
            </div>
            <div className="dropdown d-flex">
              <a
                className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                data-toggle="dropdown"
              >
                <i className="fa fa-envelope" />
                <span className="badge badge-success nav-unread" />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <ul className="right_chat list-unstyled w350 p-0">
                  <li className="online">
                    <a href="#;" className="media">
                      <img
                        className="media-object"
                        src="assets/images/xs/avatar4.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="name">Donald Gardner</span>
                        <div className="message">
                          It is a long established fact that a reader
                        </div>
                        <small>11 mins ago</small>
                        <span className="badge badge-outline status" />
                      </div>
                    </a>
                  </li>
                  <li className="online">
                    <a href="#;" className="media">
                      <img
                        className="media-object "
                        src="assets/images/xs/avatar5.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="name">Wendy Keen</span>
                        <div className="message">
                          There are many variations of passages of Lorem Ipsum
                        </div>
                        <small>18 mins ago</small>
                        <span className="badge badge-outline status" />
                      </div>
                    </a>
                  </li>
                  <li className="offline">
                    <a href="#;" className="media">
                      <img
                        className="media-object "
                        src="assets/images/xs/avatar2.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="name">Matt Rosales</span>
                        <div className="message">
                          Contrary to popular belief, Lorem Ipsum is not simply
                        </div>
                        <small>27 mins ago</small>
                        <span className="badge badge-outline status" />
                      </div>
                    </a>
                  </li>
                  <li className="online">
                    <a href="#;" className="media">
                      <img
                        className="media-object "
                        src="assets/images/xs/avatar3.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <span className="name">Phillip Smith</span>
                        <div className="message">
                          It has roots in a piece of classical Latin literature
                          from 45 BC
                        </div>
                        <small>33 mins ago</small>
                        <span className="badge badge-outline status" />
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="dropdown-divider" />
                <a
                  href="#"
                  className="dropdown-item text-center text-muted-dark readall"
                >
                  Mark all as read
                </a>
              </div>
            </div>
            <div className="dropdown d-flex">
              <a
                className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                data-toggle="dropdown"
              >
                <i className="fa fa-bell" />
                <span className="badge badge-primary nav-unread" />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <ul className="list-unstyled feeds_widget">
                  <li>
                    <div className="feeds-left">
                      <i className="fa fa-check" />
                    </div>
                    <div className="feeds-body">
                      <h4 className="title text-danger">
                        Issue Fixed{" "}
                        <small className="float-right text-muted">11:05</small>
                      </h4>
                      <small>WE have fix all Design bug with Responsive</small>
                    </div>
                  </li>
                  <li>
                    <div className="feeds-left">
                      <i className="fa fa-user" />
                    </div>
                    <div className="feeds-body">
                      <h4 className="title">
                        New User{" "}
                        <small className="float-right text-muted">10:45</small>
                      </h4>
                      <small>I feel great! Thanks team</small>
                    </div>
                  </li>
                  <li>
                    <div className="feeds-left">
                      <i className="fa fa-thumbs-o-up" />
                    </div>
                    <div className="feeds-body">
                      <h4 className="title">
                        7 New Feedback{" "}
                        <small className="float-right text-muted">Today</small>
                      </h4>
                      <small>It will give a smart finishing to your site</small>
                    </div>
                  </li>
                  <li>
                    <div className="feeds-left">
                      <i className="fa fa-question-circle" />
                    </div>
                    <div className="feeds-body">
                      <h4 className="title text-warning">
                        Server Warning{" "}
                        <small className="float-right text-muted">10:50</small>
                      </h4>
                      <small>Your connection is not private</small>
                    </div>
                  </li>
                  <li>
                    <div className="feeds-left">
                      <i className="fa fa-shopping-cart" />
                    </div>
                    <div className="feeds-body">
                      <h4 className="title">
                        7 New Orders{" "}
                        <small className="float-right text-muted">11:35</small>
                      </h4>
                      <small>You received a new oder from Tina.</small>
                    </div>
                  </li>
                </ul>
                <div className="dropdown-divider" />
                <a
                  href="#"
                  className="dropdown-item text-center text-muted-dark readall"
                >
                  Mark all as read
                </a>
              </div>
            </div>
            <div className="dropdown d-flex">
              <a
                className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                data-toggle="dropdown"
              >
                <i className="fa fa-user" />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a className="dropdown-item" href="page-profile.html">
                  <i className="dropdown-icon fe fe-user" /> Profile
                </a>
                <a className="dropdown-item" href="app-setting.html">
                  <i className="dropdown-icon fe fe-settings" /> Settings
                </a>
                <a className="dropdown-item" href="#">
                  <span className="float-right">
                    <span className="badge badge-primary">6</span>
                  </span>
                  <i className="dropdown-icon fe fe-mail" /> Inbox
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-send" /> Message
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-help-circle" /> Need help?
                </a>
                <a className="dropdown-item" href="login.html">
                  <i className="dropdown-icon fe fe-log-out" /> Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-body mt-3">
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="id"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Priority"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Department"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Agent"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      data-provide="datepicker"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <a
                    href="#;"
                    className="btn btn-primary btn-block"
                    title=""
                  >
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover table-striped table-vcenter mb-0 text-nowrap">
                <thead>
                  <tr>
                    <th colSpan={5}>Ticket Detail</th>
                    <th colSpan={3}>Activity</th>
                  </tr>
                  <tr>
                    <th className="w30">&nbsp;</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Priority</th>
                    <th>Department</th>
                    <th>Agent</th>
                    <th>Date</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                          defaultChecked=""
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-5258</a>
                    </td>
                    <td>
                      <span>It is a long established fact that a reader</span>
                    </td>
                    <td>
                      <span className="tag tag-default">lower</span>
                    </td>
                    <td>
                      <span>Pre-Sales</span>
                    </td>
                    <td>
                      <span>Archie Cantones</span>
                    </td>
                    <td>
                      <span>6 hours ago</span>
                    </td>
                    <td>No reply yet</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-8793</a>
                    </td>
                    <td>
                      <span>Measures your Current Assets / Current</span>
                    </td>
                    <td>
                      <span className="tag tag-danger">High</span>
                    </td>
                    <td>
                      <span>Pre-Sales</span>
                    </td>
                    <td>
                      <span>Rose Orcullo</span>
                    </td>
                    <td>
                      <span>9 hours ago</span>
                    </td>
                    <td>2 reply</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-2500</a>
                    </td>
                    <td>
                      <span>There are many variations of passages</span>
                    </td>
                    <td>
                      <span className="tag tag-info">Medium</span>
                    </td>
                    <td>
                      <span>Pre-Sales</span>
                    </td>
                    <td>
                      <span>Charize Cericoz</span>
                    </td>
                    <td>
                      <span>10 hours ago</span>
                    </td>
                    <td>1 reply</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-9465</a>
                    </td>
                    <td>
                      <span>Measures your Current Assets / Current</span>
                    </td>
                    <td>
                      <span className="tag tag-default">lower</span>
                    </td>
                    <td>
                      <span>Payment</span>
                    </td>
                    <td>
                      <span>Billie Ko</span>
                    </td>
                    <td>
                      <span>23-01-2019</span>
                    </td>
                    <td>No reply yet</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-1515</a>
                    </td>
                    <td>
                      <span>Contrary to popular belief, Lorem Ipsum</span>
                    </td>
                    <td>
                      <span className="tag tag-info">Medium</span>
                    </td>
                    <td>
                      <span>Sales</span>
                    </td>
                    <td>
                      <span>Hamza Macasindil</span>
                    </td>
                    <td>
                      <span>22-01-2019</span>
                    </td>
                    <td>No reply yet</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-2589</a>
                    </td>
                    <td>
                      <span>It uses a dictionary of over 200 Latin</span>
                    </td>
                    <td>
                      <span className="tag tag-info">Medium</span>
                    </td>
                    <td>
                      <span>Technical</span>
                    </td>
                    <td>
                      <span>Dyanne Aceron</span>
                    </td>
                    <td>
                      <span>28-01-2019</span>
                    </td>
                    <td>5 reply</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-8793</a>
                    </td>
                    <td>
                      <span>Measures your Current Assets / Current</span>
                    </td>
                    <td>
                      <span className="tag tag-danger">High</span>
                    </td>
                    <td>
                      <span>Pre-Sales</span>
                    </td>
                    <td>
                      <span>Rose Orcullo</span>
                    </td>
                    <td>
                      <span>9 hours ago</span>
                    </td>
                    <td>2 reply</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-2500</a>
                    </td>
                    <td>
                      <span>There are many variations of passages</span>
                    </td>
                    <td>
                      <span className="tag tag-info">Medium</span>
                    </td>
                    <td>
                      <span>Pre-Sales</span>
                    </td>
                    <td>
                      <span>Charize Cericoz</span>
                    </td>
                    <td>
                      <span>10 hours ago</span>
                    </td>
                    <td>1 reply</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-9465</a>
                    </td>
                    <td>
                      <span>Measures your Current Assets / Current</span>
                    </td>
                    <td>
                      <span className="tag tag-default">lower</span>
                    </td>
                    <td>
                      <span>Payment</span>
                    </td>
                    <td>
                      <span>Billie Ko</span>
                    </td>
                    <td>
                      <span>23-01-2019</span>
                    </td>
                    <td>No reply yet</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <a href="#">ASD-4569</a>
                    </td>
                    <td>
                      <span>The standard chunk of Lorem Ipsum used</span>
                    </td>
                    <td>
                      <span className="tag tag-danger">High</span>
                    </td>
                    <td>
                      <span>Technical</span>
                    </td>
                    <td>
                      <span>Dyanne Aceron</span>
                    </td>
                    <td>
                      <span>02-02-2019</span>
                    </td>
                    <td>3 reply</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <Footer/>
    </>
  )
}

export default Ticketlist;