import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
  
  <>
  <div id="header_top" className="header_top">
    <div className="container">
      <div className="hleft">
        <Link className="header-brand" to="/">
          <img className="img-fluid" src="assets/images/HHGlogo.png" />
          {/* <i class="fa fa-soccer-ball-o brand-logo"></i> */}
        </Link>
        <div className="dropdown">
          <a href="javascript:void(0)" className="nav-link user_btn">
            <img
              className="avatar"
              src="assets/images/user.png"
              alt=""
              data-toggle="tooltip"
              data-placement="right"
              title="User Menu"
            />
          </a>
          <a href="/" className="nav-link icon xs-hide">
            <i className="fa fa-search" />
          </a>
          <a
            href="/"
            className="nav-link icon app_inbox xs-hide"
          >
            <i className="fa fa-calendar" />
          </a>
          <a href="/" className="nav-link icon xs-hide">
            <i className="fa fa-id-card-o" />
          </a>
          <a href="/" className="nav-link icon xs-hide">
            <i className="fa fa-comments-o" />
          </a>
          <a
            href="/"
            className="nav-link icon app_file xs-hide"
          >
            <i className="fa fa-folder-o" />
          </a>
          <a
            href="javascript:void(0)"
            className="nav-link icon theme_btn xs-hide"
          >
            <i
              className="fa fa-paint-brush"
              data-toggle="tooltip"
              data-placement="right"
              title="Themes"
            />
          </a>
        </div>
      </div>
      <div className="hright">
        <div className="dropdown">
          <a href="javascript:void(0)" className="nav-link icon settingbar">
            <i
              className="fa fa-gear fa-spin"
              data-toggle="tooltip"
              data-placement="right"
              title="Settings"
            />
          </a>
          <a href="javascript:void(0)" className="nav-link icon menu_toggle">
            <i className="fa  fa-align-left" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="rightsidebar" className="right_sidebar">
    <a href="javascript:void(0)" className="p-3 settingbar float-right">
      <i className="fa fa-close" />
    </a>
    <div className="p-4">
      <div className="mb-4">
        <h6 className="font-14 font-weight-bold text-muted">Font Style</h6>
        <div className="custom-controls-stacked font_setting">
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="font"
              defaultValue="font-opensans"
            />
            <span className="custom-control-label">Open Sans Font</span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="font"
              defaultValue="font-montserrat"
              defaultChecked=""
            />
            <span className="custom-control-label">Montserrat Google Font</span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="font"
              defaultValue="font-roboto"
            />
            <span className="custom-control-label">Robot Google Font</span>
          </label>
        </div>
      </div>
      <hr />
      <div className="mb-4">
        <h6 className="font-14 font-weight-bold text-muted">
          Dropdown Menu Icon
        </h6>
        <div className="custom-controls-stacked arrow_option">
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="marrow"
              defaultValue="arrow-a"
            />
            <span className="custom-control-label">A</span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="marrow"
              defaultValue="arrow-b"
            />
            <span className="custom-control-label">B</span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="marrow"
              defaultValue="arrow-c"
              defaultChecked=""
            />
            <span className="custom-control-label">C</span>
          </label>
        </div>
        <h6 className="font-14 font-weight-bold mt-4 text-muted">
          SubMenu List Icon
        </h6>
        <div className="custom-controls-stacked list_option">
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="listicon"
              defaultValue="list-a"
              defaultChecked=""
            />
            <span className="custom-control-label">A</span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="listicon"
              defaultValue="list-b"
            />
            <span className="custom-control-label">B</span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              name="listicon"
              defaultValue="list-c"
            />
            <span className="custom-control-label">C</span>
          </label>
        </div>
      </div>
      <hr />
      <div>
        <h6 className="font-14 font-weight-bold mt-4 text-muted">
          General Settings
        </h6>
        <ul className="setting-list list-unstyled mt-1 setting_switch">
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">Night Mode</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-darkmode"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">Fix Navbar top</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-fixnavbar"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">Header Dark</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-pageheader"
                defaultChecked=""
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">
                Min Sidebar Dark
              </span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-min_sidebar"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">Sidebar Dark</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-sidebar"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">Icon Color</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-iconcolor"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">Gradient Color</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-gradient"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">Box Shadow</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-boxshadow"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">RTL Support</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-rtl"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
          <li>
            <label className="custom-switch">
              <span className="custom-switch-description">Box Layout</span>
              <input
                type="checkbox"
                name="custom-switch-checkbox"
                className="custom-switch-input btn-boxlayout"
              />
              <span className="custom-switch-indicator" />
            </label>
          </li>
        </ul>
      </div>
      <hr />
      <div className="form-group">
        <label className="d-block">
          Storage <span className="float-right">77%</span>
        </label>
        <div className="progress progress-sm">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={77}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "77%" }}
          />
        </div>
        <button type="button" className="btn btn-primary btn-block mt-3">
          Upgrade Storage
        </button>
      </div>
    </div>
  </div>
</>


    </>
  )
}

export default Header