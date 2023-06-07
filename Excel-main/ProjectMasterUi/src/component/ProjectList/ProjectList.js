import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import LeftSection from '../LeftSection/LeftSection'

function ProjectList() {
  return (
    <>
      <LeftSection/>
      <Header />

      <div id="main_content">
  <div className="page">
    <div id="page_top" className="section-body top_dark">
      <div className="container-fluid">
      <div className="page-header">
  <div className="left">
    <a href="#" className="icon menu_toggle mr-3">
      <i className="fa  fa-align-left" />
    </a>
    <h1 className="page-title">Project</h1>
  </div>
  <div className="right">
    <div className="input-icon xs-hide mr-4">
      <input type="text" className="form-control" placeholder="Search for..." />
      <span className="input-icon-addon">
        <i className="fa fa-search" />
      </span>
    </div>
    <div className="notification d-flex" style={{ display: "none !important" }}>
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
                    It has roots in a piece of classical Latin literature from
                    45 BC
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
    <div className="section-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center">
              <ul className="nav nav-tabs page-header-tab">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#Project-OnGoing"
                  >
                    OnGoing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#Project-UpComing"
                  >
                    UpComing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#Project-add">
                    Add
                  </a>
                </li>
              </ul>
              <div className="header-action d-md-flex">
                <div className="input-group mr-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-body mt-3">
      <div className="container-fluid">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="Project-OnGoing"
            role="tabpanel"
          >
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">New Admin Design</h3>
                    <div className="card-options">
                      <label className="custom-switch m-0">
                        <input
                          type="checkbox"
                          defaultValue={1}
                          className="custom-switch-input"
                          defaultChecked=""
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                      <a
                        href="#"
                        className="card-options-collapse"
                        data-toggle="card-collapse"
                      >
                        <i className="fa fa-chevron-up" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="tag tag-blue mb-3">Web Design</span>
                    <p>
                      Aperiam deleniti fugit incidunt, iste, itaque minima neque
                      pariatur perferendis temporibus!
                    </p>
                    <div className="row">
                      <div className="col-5 py-1">
                        <strong>Created:</strong>
                      </div>
                      <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                      <div className="col-5 py-1">
                        <strong>Creator:</strong>
                      </div>
                      <div className="col-7 py-1">Nathan Guerrero</div>
                      <div className="col-5 py-1">
                        <strong>Question:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>23</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Comments:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>32</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Bug:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>5</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Team:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <div className="avatar-list avatar-list-stacked">
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar1.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar2.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar3.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar4.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar5.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <span className="avatar avatar-sm">+8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>15%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Progress</small>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-red"
                        role="progressbar"
                        style={{ width: "15%" }}
                        aria-valuenow={36}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Job Portal Web App</h3>
                    <div className="card-options">
                      <label className="custom-switch m-0">
                        <input
                          type="checkbox"
                          defaultValue={1}
                          className="custom-switch-input"
                          defaultChecked=""
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                      <a
                        href="#"
                        className="card-options-collapse"
                        data-toggle="card-collapse"
                      >
                        <i className="fa fa-chevron-up" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="tag tag-pink mb-3">Angular</span>
                    <p>
                      Aperiam deleniti fugit incidunt, iste, itaque minima neque
                      pariatur perferendis temporibus!
                    </p>
                    <div className="row">
                      <div className="col-5 py-1">
                        <strong>Created:</strong>
                      </div>
                      <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                      <div className="col-5 py-1">
                        <strong>Creator:</strong>
                      </div>
                      <div className="col-7 py-1">Nathan Guerrero</div>
                      <div className="col-5 py-1">
                        <strong>Question:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>55</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Comments:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>43</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Bug:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>5</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Team:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <div className="avatar-list avatar-list-stacked">
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar6.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar7.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar8.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar1.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar2.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <span className="avatar avatar-sm">+8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>75%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Progress</small>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">App design and Development</h3>
                    <div className="card-options">
                      <label className="custom-switch m-0">
                        <input
                          type="checkbox"
                          defaultValue={1}
                          className="custom-switch-input"
                          defaultChecked=""
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                      <a
                        href="#"
                        className="card-options-collapse"
                        data-toggle="card-collapse"
                      >
                        <i className="fa fa-chevron-up" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="tag tag-green mb-3">Android</span>
                    <p>
                      Aperiam deleniti fugit incidunt, iste, itaque minima neque
                      pariatur perferendis temporibus!
                    </p>
                    <div className="row">
                      <div className="col-5 py-1">
                        <strong>Created:</strong>
                      </div>
                      <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                      <div className="col-5 py-1">
                        <strong>Creator:</strong>
                      </div>
                      <div className="col-7 py-1">Nathan Guerrero</div>
                      <div className="col-5 py-1">
                        <strong>Question:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>12</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Comments:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>96</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Bug:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>7</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Team:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <div className="avatar-list avatar-list-stacked">
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar1.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar2.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar5.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <span className="avatar avatar-sm">+8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>47%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Progress</small>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-blue"
                        role="progressbar"
                        style={{ width: "47%" }}
                        aria-valuenow={47}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Job Portal Web App</h3>
                    <div className="card-options">
                      <label className="custom-switch m-0">
                        <input
                          type="checkbox"
                          defaultValue={1}
                          className="custom-switch-input"
                          defaultChecked=""
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                      <a
                        href="#"
                        className="card-options-collapse"
                        data-toggle="card-collapse"
                      >
                        <i className="fa fa-chevron-up" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="tag tag-pink mb-3">Angular</span>
                    <p>
                      Aperiam deleniti fugit incidunt, iste, itaque minima neque
                      pariatur perferendis temporibus!
                    </p>
                    <div className="row">
                      <div className="col-5 py-1">
                        <strong>Created:</strong>
                      </div>
                      <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                      <div className="col-5 py-1">
                        <strong>Creator:</strong>
                      </div>
                      <div className="col-7 py-1">Nathan Guerrero</div>
                      <div className="col-5 py-1">
                        <strong>Question:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>55</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Comments:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>43</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Bug:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>5</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Team:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <div className="avatar-list avatar-list-stacked">
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar6.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar7.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar8.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar1.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar2.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <span className="avatar avatar-sm">+8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>75%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Progress</small>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">One Page landing</h3>
                    <div className="card-options">
                      <label className="custom-switch m-0">
                        <input
                          type="checkbox"
                          defaultValue={1}
                          className="custom-switch-input"
                          defaultChecked=""
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                      <a
                        href="#"
                        className="card-options-collapse"
                        data-toggle="card-collapse"
                      >
                        <i className="fa fa-chevron-up" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="tag tag-blue mb-3">Wordpress</span>
                    <p>
                      Aperiam deleniti fugit incidunt, iste, itaque minima neque
                      pariatur perferendis temporibus!
                    </p>
                    <div className="row">
                      <div className="col-5 py-1">
                        <strong>Created:</strong>
                      </div>
                      <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                      <div className="col-5 py-1">
                        <strong>Creator:</strong>
                      </div>
                      <div className="col-7 py-1">Nathan Guerrero</div>
                      <div className="col-5 py-1">
                        <strong>Question:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>23</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Comments:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>32</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Bug:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>5</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Team:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <div className="avatar-list avatar-list-stacked">
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar1.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar2.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar3.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar4.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar5.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <span className="avatar avatar-sm">+8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>17%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Progress</small>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-red"
                        role="progressbar"
                        style={{ width: "17%" }}
                        aria-valuenow={36}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Job Portal Web App</h3>
                    <div className="card-options">
                      <label className="custom-switch m-0">
                        <input
                          type="checkbox"
                          defaultValue={1}
                          className="custom-switch-input"
                          defaultChecked=""
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                      <a
                        href="#"
                        className="card-options-collapse"
                        data-toggle="card-collapse"
                      >
                        <i className="fa fa-chevron-up" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="tag tag-gray mb-3">iOS App</span>
                    <p>
                      Aperiam deleniti fugit incidunt, iste, itaque minima neque
                      pariatur perferendis temporibus!
                    </p>
                    <div className="row">
                      <div className="col-5 py-1">
                        <strong>Created:</strong>
                      </div>
                      <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                      <div className="col-5 py-1">
                        <strong>Creator:</strong>
                      </div>
                      <div className="col-7 py-1">Nathan Guerrero</div>
                      <div className="col-5 py-1">
                        <strong>Question:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>55</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Comments:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>43</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Bug:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <strong>5</strong>
                      </div>
                      <div className="col-5 py-1">
                        <strong>Team:</strong>
                      </div>
                      <div className="col-7 py-1">
                        <div className="avatar-list avatar-list-stacked">
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar6.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar7.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar8.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar1.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <img
                            className="avatar avatar-sm"
                            src="assets/images/xs/avatar2.jpg"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Avatar Name"
                          />
                          <span className="avatar avatar-sm">+8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>81%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Progress</small>
                      </div>
                    </div>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        style={{ width: "81%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="Project-UpComing" role="tabpanel">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-striped table-vcenter mb-0 text-nowrap">
                        <thead>
                          <tr>
                            <th>Owner</th>
                            <th>Milestone</th>
                            <th className="w100">Work</th>
                            <th className="w100">Duration</th>
                            <th>Priority</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="assets/images/xs/avatar1.jpg"
                                alt="Avatar"
                                className="w30 rounded-circle mr-2"
                              />{" "}
                              <span>Isidore Dilao</span>
                            </td>
                            <td>Account receivable</td>
                            <td>
                              <span>30:00</span>
                            </td>
                            <td>30:0 hrs</td>
                            <td>
                              <span className="text-warning">Medium</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/xs/avatar2.jpg"
                                alt="Avatar"
                                className="w30 rounded-circle mr-2"
                              />{" "}
                              <span>Maricel Villalon</span>
                            </td>
                            <td>Account receivable</td>
                            <td>
                              <span>68:00</span>
                            </td>
                            <td>105:0 hrs</td>
                            <td>
                              <span className="text-danger">High</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/xs/avatar3.jpg"
                                alt="Avatar"
                                className="w30 rounded-circle mr-2"
                              />{" "}
                              <span>Theresa Wright</span>
                            </td>
                            <td>Approval site</td>
                            <td>
                              <span>74:00</span>
                            </td>
                            <td>89:0 hrs</td>
                            <td>
                              <span>None</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/xs/avatar4.jpg"
                                alt="Avatar"
                                className="w30 rounded-circle mr-2"
                              />{" "}
                              <span>Jason Porter</span>
                            </td>
                            <td>Final touch up</td>
                            <td>
                              <span>30:00</span>
                            </td>
                            <td>30:0 hrs</td>
                            <td>
                              <span>None</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/xs/avatar5.jpg"
                                alt="Avatar"
                                className="w30 rounded-circle mr-2"
                              />{" "}
                              <span>Annelyn Mercado</span>
                            </td>
                            <td>Account receivable</td>
                            <td>
                              <span>30:00</span>
                            </td>
                            <td>30:0 hrs</td>
                            <td>
                              <span>None</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/xs/avatar6.jpg"
                                alt="Avatar"
                                className="w30 rounded-circle mr-2"
                              />{" "}
                              <span>Sean Black</span>
                            </td>
                            <td>Basement slab preparation</td>
                            <td>
                              <span>88:00</span>
                            </td>
                            <td>88:0 hrs</td>
                            <td>
                              <span>None</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/xs/avatar7.jpg"
                                alt="Avatar"
                                className="w30 rounded-circle mr-2"
                              />{" "}
                              <span>Scott Ortega</span>
                            </td>
                            <td>Account receivable</td>
                            <td>
                              <span>56:00</span>
                            </td>
                            <td>125:0 hrs</td>
                            <td>
                              <span className="text-warning">Medium</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/xs/avatar8.jpg"
                                alt="Avatar"
                                className="w30 rounded-circle mr-2"
                              />{" "}
                              <span>David Wallace</span>
                            </td>
                            <td>Account receivable</td>
                            <td>
                              <span>30:00</span>
                            </td>
                            <td>30:0 hrs</td>
                            <td>
                              <span>None</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="Project-add" role="tabpanel"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default ProjectList;